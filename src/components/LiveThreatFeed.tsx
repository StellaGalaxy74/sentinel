import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { ThreatEvent } from '../types';

export default function LiveThreatFeed() {
  const [threats, setThreats] = useState<ThreatEvent[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Connect to local websocket server
    const socket = io('/', { transports: ['websocket'] });

    socket.on('threat_update', (threat: ThreatEvent) => {
      setThreats((prev) => {
        const newThreats = [...prev, threat];
        return newThreats.slice(-20); // Keep last 20 events
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // auto scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [threats]);

  const getSeverityStyle = (severity: string) => {
    switch(severity) {
      case 'CRITICAL': return 'text-neon-red bg-red-950/30';
      case 'HIGH': return 'text-orange-400 bg-orange-950/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-950/30';
      default: return 'text-slate-300';
    }
  };

  return (
    <section id="threats" className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
         <div className="w-8 h-8 bg-neon-blue/10 rounded-lg shadow-[0_0_15px_rgba(0,209,255,0.2)] flex items-center justify-center border border-neon-blue/20">
           <Terminal className="w-4 h-4 text-neon-blue" />
         </div>
         <h2 className="text-2xl font-bold tracking-tight text-white">Global Threat Stream</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Terminal Log */}
        <div className="md:col-span-2 bg-black border border-slate-800 rounded-2xl p-4 h-[400px] flex flex-col font-mono relative overflow-hidden group text-[10px]">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <span>Terminal :: Raw Feed</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
              Live
            </span>
          </div>
          
          <div 
            ref={containerRef}
            className="flex-1 overflow-y-auto terminal-scrollbar pr-2 space-y-1 text-sm scroll-smooth"
          >
            {threats.length === 0 ? (
              <div className="text-slate-600 animate-pulse">Waiting for socket data...</div>
            ) : (
              <AnimatePresence initial={false}>
                {threats.map((t, idx) => (
                  <motion.div 
                    key={t.id + idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex items-start gap-3 p-1.5 rounded transition-colors ${getSeverityStyle(t.severity)} hover:bg-slate-900`}
                  >
                    <span className="opacity-50 min-w-[50px] font-mono">[{new Date(t.timestamp).toLocaleTimeString([], { hour12: false })}]</span>
                    <span className="font-bold min-w-[70px]">{t.severity}</span>
                    <span className="min-w-[120px] text-neon-blue font-mono">{t.type}</span>
                    <span className="opacity-75 hidden sm:inline">ORIGIN: {t.origin}</span>
                    <span className="opacity-75 hidden sm:inline">TARGET: {t.target}</span>
                    <span className="ml-auto opacity-90 font-semibold">{t.action}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </div>

        {/* Mini Stats side card */}
        <div className="flex flex-col gap-4">
           <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center flex-1">
             <div className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mb-2">Threats Blocked (1HR)</div>
             <div className="text-5xl font-bold text-white tracking-tighter">
               42,109
             </div>
           </div>
           <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center flex-1 border-t-2 border-t-neon-red/50">
             <div className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mb-2">Active Critical Alert</div>
             <div className="text-2xl font-mono font-bold text-neon-red animate-pulse tracking-tight">
               DEFCON 3
             </div>
             <div className="text-[10px] text-slate-500 mt-2 font-mono">DDoS anomaly detected originating from AS9912</div>
           </div>
        </div>

      </div>
    </section>
  );
}
