-- ==============================================================================
-- HELIOS SOLAR INSTALL & PERMIT OS (Phase 2 - #59)
-- Commercial PV Sizing, Stamped AHJ & Interconnect PTO Schema
-- ==============================================================================

-- 1. Solar Projects Table
CREATE TABLE IF NOT EXISTS solar_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_code TEXT NOT NULL UNIQUE,
    project_name TEXT NOT NULL,
    property_address TEXT NOT NULL,
    system_size_kwp NUMERIC NOT NULL,
    battery_kwh NUMERIC DEFAULT 0,
    module_spec TEXT NOT NULL DEFAULT '400W Monocrystalline PERC',
    inverter_spec TEXT NOT NULL DEFAULT 'SolarEdge / Enphase Microinverters',
    contract_value NUMERIC NOT NULL,
    ahj_status TEXT NOT NULL DEFAULT 'PE_STAMPED', -- PE_STAMPED, AHJ_IN_REVIEW, PTO_APPROVED, INSTALL_ACTIVE
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. AHJ Permitting Gates Table
CREATE TABLE IF NOT EXISTS ahj_permits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES solar_projects(id) ON DELETE CASCADE,
    jurisdiction_name TEXT NOT NULL,
    permit_number TEXT NOT NULL,
    structural_pe_stamped BOOLEAN DEFAULT true,
    electrical_3line_approved BOOLEAN DEFAULT true,
    fire_setback_verified BOOLEAN DEFAULT true,
    plan_review_status TEXT NOT NULL DEFAULT 'SUBMITTED', -- SUBMITTED, APPROVED, CORRECTIONS_REQUIRED
    issued_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Utility Interconnection & PTO Table
CREATE TABLE IF NOT EXISTS utility_interconnects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES solar_projects(id) ON DELETE CASCADE,
    utility_name TEXT NOT NULL,
    application_id TEXT NOT NULL UNIQUE,
    feeder_capacity_approved BOOLEAN DEFAULT true,
    bidirectional_meter_installed BOOLEAN DEFAULT false,
    pto_granted_date DATE,
    net_metering_tariff TEXT NOT NULL DEFAULT 'Commercial Time-of-Use Net 1:1',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Battery Storage Dispatch Banks Table
CREATE TABLE IF NOT EXISTS battery_storage_banks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES solar_projects(id) ON DELETE CASCADE,
    storage_model TEXT NOT NULL,
    nominal_kwh NUMERIC NOT NULL,
    continuous_power_kw NUMERIC NOT NULL,
    microgrid_islanding_ready BOOLEAN DEFAULT true,
    telemetry_status TEXT NOT NULL DEFAULT 'ONLINE_STANDBY',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ENABLE ROW LEVEL SECURITY
ALTER TABLE solar_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE ahj_permits ENABLE ROW LEVEL SECURITY;
ALTER TABLE utility_interconnects ENABLE ROW LEVEL SECURITY;
ALTER TABLE battery_storage_banks ENABLE ROW LEVEL SECURITY;

-- POLICIES
CREATE POLICY "Public Read Access solar_projects" ON solar_projects FOR SELECT USING (true);
CREATE POLICY "Public Write Access solar_projects" ON solar_projects FOR INSERT WITH CHECK (true);

CREATE POLICY "Public Read Access ahj_permits" ON ahj_permits FOR SELECT USING (true);
CREATE POLICY "Public Write Access ahj_permits" ON ahj_permits FOR INSERT WITH CHECK (true);

CREATE POLICY "Public Read Access utility_interconnects" ON utility_interconnects FOR SELECT USING (true);
CREATE POLICY "Public Write Access utility_interconnects" ON utility_interconnects FOR INSERT WITH CHECK (true);

CREATE POLICY "Public Read Access battery_storage_banks" ON battery_storage_banks FOR SELECT USING (true);
CREATE POLICY "Public Write Access battery_storage_banks" ON battery_storage_banks FOR INSERT WITH CHECK (true);
