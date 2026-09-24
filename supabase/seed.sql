-- SEED DATA FOR HELIOS SOLAR INSTALL & PERMIT OS
INSERT INTO solar_projects (id, project_code, project_name, property_address, system_size_kwp, battery_kwh, module_spec, inverter_spec, contract_value, ahj_status)
VALUES
('d1111111-1111-1111-1111-111111111111', 'SOL-901', 'Southwest Logistics Hub (Phase 1)', '1800 Freight Corridor, Austin TX', 450.0, 1200.0, 'REC Alpha Pure-R 430W', 'SMA Sunny Tripower CORE1 50kW', 840000.00, 'PTO_APPROVED'),
('d2222222-2222-2222-2222-222222222222', 'SOL-902', 'Travis County Regional Medical Annex', '4120 Westcreek Blvd, Austin TX', 185.0, 360.0, 'Qcells Q.PEAK DUO 405W', 'SolarEdge Synergy 100kW', 395000.00, 'AHJ_IN_REVIEW'),
('d3333333-3333-3333-3333-333333333333', 'SOL-903', 'Residences at Barton Springs', '900 Barton Creek Rd, Austin TX', 28.0, 40.0, 'Maxeon 6 AC 425W', 'Enphase IQ8M Microinverters', 74500.00, 'INSTALL_ACTIVE'),
('d4444444-4444-4444-4444-444444444444', 'SOL-904', 'St. Claire Vineyard & Tasting Estate', '1440 Ranch Rd 12, Dripping Springs TX', 65.0, 100.0, 'Canadian Solar HiKu7 600W', 'SolarEdge 50k Commercial', 148000.00, 'PE_STAMPED');

INSERT INTO ahj_permits (project_id, jurisdiction_name, permit_number, structural_pe_stamped, electrical_3line_approved, fire_setback_verified, plan_review_status, issued_date)
VALUES
('d1111111-1111-1111-1111-111111111111', 'City of Austin Development Services', 'PRM-SOL-2026-90412', true, true, true, 'APPROVED', '2026-08-15'),
('d2222222-2222-2222-2222-222222222222', 'City of Austin Development Services', 'PRM-SOL-2026-90884', true, true, true, 'SUBMITTED', NULL),
('d3333333-3333-3333-3333-333333333333', 'City of West Lake Hills', 'WLH-PV-2026-1142', true, true, true, 'APPROVED', '2026-09-02'),
('d4444444-4444-4444-4444-444444444444', 'Hays County Development Dept', 'HC-SOL-2026-4401', true, false, true, 'SUBMITTED', NULL);

INSERT INTO utility_interconnects (project_id, utility_name, application_id, feeder_capacity_approved, bidirectional_meter_installed, pto_granted_date, net_metering_tariff)
VALUES
('d1111111-1111-1111-1111-111111111111', 'Austin Energy Commercial', 'INT-AE-2026-8801', true, true, '2026-09-10', 'Commercial Time-of-Use Net 1:1'),
('d2222222-2222-2222-2222-222222222222', 'Oncor Electric Delivery', 'INT-ONC-2026-4412', true, false, NULL, 'Commercial Standard Net Metering'),
('d3333333-3333-3333-3333-333333333333', 'Pedernales Electric Coop', 'INT-PEC-2026-3390', true, false, NULL, 'Residential Solar Rider 2026'),
('d4444444-4444-4444-4444-444444444444', 'Pedernales Electric Coop', 'INT-PEC-2026-3398', true, false, NULL, 'Commercial Agricultural Solar Tariff');

INSERT INTO battery_storage_banks (project_id, storage_model, nominal_kwh, continuous_power_kw, microgrid_islanding_ready, telemetry_status)
VALUES
('d1111111-1111-1111-1111-111111111111', 'Tesla Megapack 2XL', 1200.0, 500.0, true, 'ONLINE_GRID_SYNC'),
('d2222222-2222-2222-2222-222222222222', 'Enphase IQ Battery 5P Array', 360.0, 160.0, true, 'ONLINE_STANDBY'),
('d3333333-3333-3333-3333-333333333333', 'Tesla Powerwall 3 (x3 Units)', 40.5, 34.5, true, 'ONLINE_STANDBY'),
('d4444444-4444-4444-4444-444444444444', 'Generac PWRcell Commercial Bank', 100.0, 48.0, true, 'OFFLINE_STAGED');
