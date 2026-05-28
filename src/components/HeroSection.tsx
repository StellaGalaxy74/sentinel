import { motion } from 'framer-motion';
import { ShieldAlert, Activity, ChevronRight, Terminal } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/90 to-slate-950"></div>
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="animate-scanline"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-blue-950/50 border border-blue-800/50 w-fit">
            <Activity className="w-4 h-4 text-neon-blue animate-pulse" />
            <span className="text-xs font-mono text-blue-300 tracking-wider">AI THREAT ENGINE v4.2.0</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-none tracking-tight text-white mb-6">
            AI-Powered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Threat Intelligence</span>
          </h1>
          
          <p className="text-lg text-slate-400 font-light max-w-xl leading-relaxed">
            Enterprise-grade monitoring. Real-time incident response. Predictive AI analytics and advanced digital forensics unified into a single cinematic operations dashboard.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button className="px-6 py-3 bg-neon-blue text-black font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,209,255,0.3)]">
              Launch Dashboard
            </button>
            <button className="px-6 py-3 border border-slate-700 text-white font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-slate-800 transition-colors">
              Live Threat Feed
            </button>
          </div>
        </motion.div>

        {/* Right Graphic - Holographic Dashboard Proxy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative border border-slate-800/50 bg-slate-900/40 rounded-2xl p-2 overflow-hidden aspect-[4/3] flex flex-col">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg width="200" height="200" viewBox="0 0 100 100" className="text-neon-blue">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            
            <div className="flex items-center justify-between p-3 border-b border-slate-800/50 bg-slate-900/50 rounded-t-xl z-10">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
               </div>
               <span className="text-[10px] font-mono text-slate-500 tracking-widest">ARES_PROTOCOL_ACTIVE</span>
            </div>

            <div className="flex-1 bg-black p-4 relative overflow-hidden flex flex-col gap-3 font-mono text-xs z-10 rounded-b-xl border border-slate-800 mt-2">
              <div className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded border border-red-500/30">
                <ShieldAlert className="w-4 h-4 text-neon-red" />
              </div>

              <div className="text-neon-blue">[INFO] System kernel initialized...</div>
              <div className="text-slate-500">[INFO] Network topology mapping [OK]</div>
              <div className="mt-2 text-neon-blue">&gt; Analyzing upstream traffic...</div>
              
              <div className="flex-1 mt-4 space-y-2 text-[10px] opacity-80">
                {[...Array(5)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.4 }}
                    className="flex justify-between items-center border-b border-slate-800 pb-1"
                  >
                    <span className={i === 2 ? 'text-neon-red font-bold' : ''}>[UTC 14:02:{(10+i).toString()}] PING {192+i}.168.1.1</span>
                    <span className={i === 2 ? 'text-neon-red font-bold' : 'text-slate-500'}>
                      {i === 2 ? 'PACKET_DROP' : 'ACK'}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
