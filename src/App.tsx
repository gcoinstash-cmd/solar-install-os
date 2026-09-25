import React, { useState } from 'react';
import { 
  Sun, 
  Zap, 
  BatteryCharging, 
  FileCheck2, 
  Activity, 
  Clock, 
  MapPin, 
  Lock, 
  TrendingUp, 
  Calculator, 
  DollarSign, 
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  FileText
} from 'lucide-react';
import { AdminPortalModal } from './components/AdminPortalModal';

interface Project {
  id: string;
  name: string;
  location: string;
  systemSizeKwp: number;
  batteryKwh: number;
  ahjStatus: 'PE STAMPED' | 'AHJ IN REVIEW' | 'PTO APPROVED' | 'INSTALL ACTIVE';
  utility: string;
  contractValue: number;
}

export const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'pipeline' | 'permits' | 'roi'>('pipeline');
  const [systemSize, setSystemSize] = useState<number>(24); // kW
  const [includeBattery, setIncludeBattery] = useState<boolean>(true);

  const projects: Project[] = [
    {
      id: 'SOL-901',
      name: 'Southwest Logistics Hub (Phase 1)',
      location: '1800 Freight Corridor, Austin TX',
      systemSizeKwp: 450,
      batteryKwh: 1200,
      ahjStatus: 'PTO APPROVED',
      utility: 'Austin Energy Commercial',
      contractValue: 840000
    },
    {
      id: 'SOL-902',
      name: 'Travis County Regional Medical Annex',
      location: '4120 Westcreek Blvd, Austin TX',
      systemSizeKwp: 185,
      batteryKwh: 360,
      ahjStatus: 'AHJ IN REVIEW',
      utility: 'Oncor Electric Delivery',
      contractValue: 395000
    },
    {
      id: 'SOL-903',
      name: 'Residences at Barton Springs',
      location: '900 Barton Creek Rd, Austin TX',
      systemSizeKwp: 28,
      batteryKwh: 40,
      ahjStatus: 'INSTALL ACTIVE',
      utility: 'Pedernales Electric Coop',
      contractValue: 74500
    },
    {
      id: 'SOL-904',
      name: 'St. Claire Vineyard & Tasting Estate',
      location: '1440 Ranch Rd 12, Dripping Springs TX',
      systemSizeKwp: 65,
      batteryKwh: 100,
      ahjStatus: 'PE STAMPED',
      utility: 'Pedernales Electric Coop',
      contractValue: 148000
    }
  ];

  // Financial ROI Calc
  const grossCost = systemSize * 2400 + (includeBattery ? 18000 : 0);
  const itcTaxCredit = grossCost * 0.30;
  const netCost = grossCost - itcTaxCredit;
  const annualKwhGeneration = systemSize * 1550;
  const annualSavings = annualKwhGeneration * 0.165;
  const paybackYears = (netCost / annualSavings).toFixed(1);

  return (
    <div className="min-h-screen bg-[#0B0D0F] text-slate-100 font-sans selection:bg-amber-500/20 selection:text-amber-400">
      {/* HUD Telemetry Top Bar */}
      <header className="sticky top-0 z-40 bg-[#0B0D0F]/90 backdrop-blur-md border-b border-amber-500/20 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-base font-black tracking-tight text-white">HELIOS SOLAR</span>
                <span className="text-xs font-semibold tracking-wider font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold uppercase">
                  PERMIT OS v1.0
                </span>
              </div>
              <p className="text-xs font-semibold font-mono text-slate-400">Commercial PV Sizing, Stamped AHJ & Interconnect PTO</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-4 px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 font-mono text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Zap className="w-3.5 h-3.5" /> 728 kWp ACTIVE
              </span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <BatteryCharging className="w-3.5 h-3.5 animate-pulse" /> 1.7 MWh STORAGE
              </span>
            </div>

            <button
              onClick={() => setIsAdminOpen(true)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:border-amber-500/50 text-xs font-mono font-bold tracking-wider transition-all"
            >
              <Lock className="w-3.5 h-3.5" />
              [ SOLAR PASS ]
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#181a1d] via-[#111317] to-[#0a0c0e] border border-amber-500/20 p-6 md:p-10 shadow-2xl">
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" /> Clean Energy Infrastructure & Municipal Interconnect
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Photovoltaic Precision. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200">
                Permit Approvals in Record Time.
              </span>
            </h1>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              Industrial-grade PV array operating system built for commercial EPC contractors and regional solar developers. Track single-line electrical CAD engineering, structural PE stamps, and utility PTO milestones in one unified dashboard.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button 
                onClick={() => setActiveTab('roi')}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono tracking-wider transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4" /> LAUNCH PV + BATTERY CALCULATOR
              </button>
              <button 
                onClick={() => setIsAdminOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs border border-white/10 transition-colors flex items-center gap-2"
              >
                <FileCheck2 className="w-4 h-4 text-amber-400" /> Municipal AHJ Portal
              </button>
            </div>
          </div>
        </section>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-3 font-mono text-xs">
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-4 py-2 rounded-lg transition-all font-bold ${
              activeTab === 'pipeline'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            01 // Active Solar Pipeline
          </button>
          <button
            onClick={() => setActiveTab('permits')}
            className={`px-4 py-2 rounded-lg transition-all font-bold ${
              activeTab === 'permits'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            02 // AHJ & PTO Milestones
          </button>
          <button
            onClick={() => setActiveTab('roi')}
            className={`px-4 py-2 rounded-lg transition-all font-bold ${
              activeTab === 'roi'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            03 // Financial ROI & 30% ITC Engine
          </button>
        </div>

        {/* Tab 1: Pipeline */}
        {activeTab === 'pipeline' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">Commissioned Solar & Storage Contracts</h3>
              <button
                onClick={() => setIsAdminOpen(true)}
                className="px-3.5 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-mono text-xs font-bold hover:bg-amber-400 transition-colors"
              >
                + NEW CONTRACT INTAKE
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((proj) => (
                <div key={proj.id} className="p-6 rounded-2xl bg-[#12161b] border border-amber-500/20 hover:border-amber-500/40 transition-all space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-mono font-bold text-amber-400">{proj.id}</span>
                      <h4 className="text-base font-bold text-white mt-1">{proj.name}</h4>
                      <p className="text-base text-zinc-200 leading-relaxed flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-300" /> {proj.location}
                      </p>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold uppercase">
                      {proj.ahjStatus}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-center font-mono">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-xs text-slate-400">PV Array</div>
                      <div className="text-sm font-bold text-white mt-0.5">{proj.systemSizeKwp} kWp</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-xs text-slate-400">BESS Capacity</div>
                      <div className="text-sm font-bold text-emerald-400 mt-0.5">{proj.batteryKwh} kWh</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-xs text-slate-400">Contract</div>
                      <div className="text-sm font-bold text-amber-300 mt-0.5">${(proj.contractValue / 1000).toFixed(0)}k</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs font-mono text-slate-400 pt-1">
                    <span>Utility: {proj.utility}</span>
                    <button 
                      onClick={() => setIsAdminOpen(true)}
                      className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-bold"
                    >
                      Audit Single-Line &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Permits */}
        {activeTab === 'permits' && (
          <div className="bg-[#12161b] border border-amber-500/20 rounded-2xl p-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white">Authority Having Jurisdiction (AHJ) & PTO Milestone Gates</h3>
              <p className="text-base text-zinc-200 leading-relaxed font-mono">Standardized Interconnection Progression Roster</p>
            </div>

            <div className="space-y-4">
              {[
                { step: '01', title: 'Site Solar Shade Analysis & Drone Photogrammetry', status: 'VERIFIED', time: 'Day 1' },
                { step: '02', title: 'Electrical CAD 3-Line & Structural PE Stamp Certification', status: 'STAMPED', time: 'Day 4' },
                { step: '03', title: 'City of Austin Municipal Zoning & Fire Code Plan Review', status: 'APPROVED', time: 'Day 12' },
                { step: '04', title: 'Austin Energy Interconnect Study & Bi-Directional Meter Order', status: 'IN PROGRESS', time: 'Day 18' },
                { step: '05', title: 'Final Municipal Inspection & Permission to Operate (PTO)', status: 'QUEUED', time: 'Day 25' }
              ].map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0b0e12] border border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-lg font-black text-amber-500/50">{m.step}</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">{m.title}</h4>
                      <p className="text-xs font-mono text-slate-300">{m.time} in workflow</p>
                    </div>
                  </div>
                  <span className={`text-xs font-mono px-3 py-1 rounded font-bold uppercase ${
                    m.status === 'VERIFIED' || m.status === 'STAMPED' || m.status === 'APPROVED'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : m.status === 'IN PROGRESS'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-slate-500/20 text-slate-400 border border-slate-500/30'
                  }`}>
                    {m.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Financial ROI */}
        {activeTab === 'roi' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#12161b] border border-amber-500/20 rounded-2xl p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">Commercial System Configurator</h3>
                <p className="text-base text-zinc-200 leading-relaxed font-mono">Dynamic Solar kWp & Battery Storage Modeler</p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-400">PV Array Capacity (kW DC):</span>
                    <span className="text-amber-400 font-bold">{systemSize} kWp</span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="100"
                    step="2"
                    value={systemSize}
                    onChange={(e) => setSystemSize(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                  <div className="flex justify-between text-xs font-semibold tracking-wider font-mono text-slate-300 mt-1">
                    <span>Residential (6 kW)</span>
                    <span>Mid-Scale (40 kW)</span>
                    <span>Commercial (100 kW)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Battery Energy Storage (BESS)</div>
                    <div className="text-xs font-semibold text-slate-400 font-mono">30 kWh Lithium Iron Phosphate Peak Shaver</div>
                  </div>
                  <button
                    onClick={() => setIncludeBattery(!includeBattery)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      includeBattery
                        ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                        : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {includeBattery ? 'INCLUDED' : 'OMITTED'}
                  </button>
                </div>
              </div>
            </div>

            {/* Financial Telemetry Card */}
            <div className="bg-[#12161b] border border-amber-500/20 rounded-2xl p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">Federal ITC & ROI Telemetry</h3>
                <p className="text-base text-zinc-200 leading-relaxed font-mono">30% Section 48 Investment Tax Credit Model</p>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Gross Turnkey EPC Cost:</span>
                  <span className="text-white font-bold">${grossCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5 text-emerald-400">
                  <span>30% Federal ITC Tax Credit:</span>
                  <span className="font-bold">-${itcTaxCredit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Net Capital Investment:</span>
                  <span className="text-amber-300 font-bold text-sm">${netCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Estimated Annual Energy Generation:</span>
                  <span className="text-white font-bold">{annualKwhGeneration.toLocaleString()} kWh/yr</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Estimated Annual Utility Savings:</span>
                  <span className="text-emerald-400 font-bold">${annualSavings.toFixed(0).toLocaleString()}/yr</span>
                </div>
                <div className="flex justify-between py-2 text-sm bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
                  <span className="text-amber-300 font-bold">Payback Breakeven:</span>
                  <span className="text-white font-black">{paybackYears} Years</span>
                </div>
              </div>

              <button
                onClick={() => setIsAdminOpen(true)}
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono tracking-wider transition-colors"
              >
                EXPORT STAMPED PROPOSAL PDF
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Admin Modal */}
      <AdminPortalModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
};

export default App;
