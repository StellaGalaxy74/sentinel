import { Search, Lock, FileText, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const evidenceData = [
  { id: 'EVD-9921-A', size: '24.1 MB', hash: 'SHA256: 8f4a...2b19', healthy: true },
  { id: 'EVD-9920-B', size: '1.2 GB', hash: 'SHA256: 3c9d...1a4f', healthy: true },
  { id: 'EVD-9919-C', size: '405 KB', hash: 'SHA256: 1e8b...9c3d', healthy: false },
];

export default function ForensicsVault() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredEvidence = evidenceData.filter(ev => 
    ev.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
    ev.hash.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded border border-slate-700 bg-black/40 w-fit">
              <Lock className="w-3 h-3 text-red-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF4D4D]">RESTRICTED ACCESS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Digital Forensics Vault</h2>
            <p className="text-slate-400 mb-8 max-w-lg leading-relaxed text-sm">
              Immutable storage for incident replay, packet captures (PCAP), and chain-of-custody evidence. Every intercepted threat is hashed, compressed, and vaulted for post-mortem analysis.
            </p>

            <div className="space-y-4">
              {[
                { icon: Database, text: 'Cryptographically sealed log storage' },
                { icon: Search, text: 'Deep packet inspection replay' },
                { icon: FileText, text: 'Automated executive compliance reports' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-black border border-slate-800 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-neon-blue" />
                  </div>
                  <span className="text-slate-300 font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="px-6 py-3 border border-slate-700 text-white font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 w-fit">
                <Lock className="w-4 h-4" />
                Access Vault
              </button>
            </div>
          </div>

          <div className="relative border-t lg:border-t-0 lg:border-l border-slate-800/50 bg-[#020408] p-8 min-h-[400px]">
            <div className="absolute inset-0 cyber-grid opacity-30"></div>
            
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="w-full max-w-md space-y-4">
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-slate-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by ID or Hash..."
                    className="block w-full pl-10 pr-3 py-2 border border-slate-800 rounded-lg leading-5 bg-black/40 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-black/60 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue sm:text-[11px] transition-colors"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800/50 pb-2">
                  <span>EVIDENCE ID</span>
                  <span>SIZE</span>
                  <span>INTEGRITY</span>
                </div>
                {filteredEvidence.map((ev, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex justify-between items-center p-3 rounded-lg bg-black/60 border border-slate-800 cursor-pointer hover:border-[#00D1FF]/40 transition-colors"
                  >
                    <span className="font-mono text-neon-blue text-[11px]">{ev.id}</span>
                    <span className="text-[10px] text-slate-400 font-mono tracking-tighter">{ev.size}</span>
                    <span className={`text-[9px] font-mono font-bold ${ev.healthy ? 'text-neon-green' : 'text-neon-red'}`}>
                      {ev.hash} {ev.healthy ? '(VALID)' : '(CORRUPT)'}
                    </span>
                  </motion.div>
                ))}
                <div className="pt-4 flex justify-between items-center opacity-70">
                  <div className="h-1 flex-1 bg-slate-800 mx-2 rounded overflow-hidden">
                    <div className="h-full bg-neon-blue w-[40%] shadow-[0_0_10px_rgba(0,209,255,0.5)]"></div>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">UPLOADING...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
