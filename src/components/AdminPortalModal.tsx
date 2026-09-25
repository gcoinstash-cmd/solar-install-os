import React, { useState } from 'react';
import { ShieldCheck, Key, Lock, ArrowRight, CheckCircle, Database, Sun, Zap } from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [passkey, setPasskey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleBypass = () => {
    setPasskey('solar2026');
    setIsAuthenticated(true);
    setError(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === 'solar2026') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#12161b] border border-amber-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100 overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                Helios Solar Admin Gateway
                <span className="text-xs font-semibold tracking-wider uppercase font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Turnkey Admin
                </span>
              </h2>
              <p className="text-base text-zinc-200 leading-relaxed font-mono mt-0.5">Municipal AHJ Permitting & Interconnect PTO</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-sm font-mono px-3 py-1 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
          >
            ESC
          </button>
        </div>

        {!isAuthenticated ? (
          <div className="py-6 space-y-6">
            <div className="bg-amber-950/30 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3">
              <Key className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-amber-300">Auditor Passkey Bypass</h4>
                <p className="text-base text-zinc-200 leading-relaxed mt-1 leading-relaxed">
                  Click the instant passkey button below to auto-inject credentials and inspect live CAD single-line diagrams, stamped structural calcs, and utility interconnection PTO queues.
                </p>
                <button
                  type="button"
                  onClick={handleBypass}
                  className="mt-3 inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-lg bg-amber-500 text-slate-950 text-base font-semibold min-h-[44px] font-mono font-bold tracking-wider hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
                >
                  <Lock className="w-3.5 h-3.5" />
                  [ AUTO-FILL SOLAR PASS ]
                </button>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Solar Engineering Passkey
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={passkey}
                    onChange={(e) => setPasskey(e.target.value)}
                    placeholder="Enter passkey (e.g. solar2026)"
                    className="w-full bg-[#0b0e12] border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-amber-400 placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 px-4 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded-lg text-base font-semibold min-h-[44px] font-mono transition-colors flex items-center gap-1.5"
                  >
                    Enter <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                {error && (
                  <p className="text-rose-400 text-xs mt-2 font-mono">Invalid credentials. Use passkey: solar2026</p>
                )}
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 space-y-6">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <div>
                  <h4 className="text-sm font-semibold text-emerald-300">Helios Master Engineer Access Granted</h4>
                  <p className="text-base text-zinc-200 leading-relaxed font-mono mt-0.5">Session: SOLAR-AHJ-PTO-2026</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                ROOT ENGINEER
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-[#0b0e12] rounded-xl border border-white/5 text-center">
                <Database className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <div className="text-lg font-bold font-mono text-white">4 Tables</div>
                <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase font-mono">Supabase SQL</div>
              </div>
              <div className="p-3 bg-[#0b0e12] rounded-xl border border-white/5 text-center">
                <Sun className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <div className="text-lg font-bold font-mono text-white">2.8 MW</div>
                <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase font-mono">Pipeline Volume</div>
              </div>
              <div className="p-3 bg-[#0b0e12] rounded-xl border border-white/5 text-center">
                <Zap className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                <div className="text-lg font-bold font-mono text-white">100%</div>
                <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase font-mono">RLS Security</div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Database Schema Verification</div>
              <div className="text-xs font-mono text-amber-300 space-y-1">
                <div>• solar_projects (kWp nameplate rating, annual kWh offset, module spec)</div>
                <div>• ahj_permits (Municipal zoning, structural PE stamps, electrical plans)</div>
                <div>• utility_interconnects (Transformer studies, bi-directional meter PTO status)</div>
                <div>• battery_storage_banks (Tesla Megapack & Enphase IQ5 peak-shaving dispatch)</div>
              </div>
            </div>

            <button
              onClick={() => {
                setIsAuthenticated(false);
                setPasskey('');
              }}
              className="w-full py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              Lock Terminal & Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
