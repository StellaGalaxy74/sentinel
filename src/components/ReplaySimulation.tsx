import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Crosshair, ShieldAlert, Bug, ShieldCheck, DatabaseBackup } from 'lucide-react';
import { useState, useEffect } from 'react';

const sequence = [
  { step: 1, icon: Crosshair, title: 'Threat Detected', desc: 'Anomalous payload detected on web cluster edge.', color: 'text-yellow-400' },
  { step: 2, icon: Bug, title: 'AI Analysis', desc: 'Deep packet inspection confirms zero-day signature.', color: 'text-orange-400' },
  { step: 3, icon: ShieldAlert, title: 'Alert Generated', desc: 'SOC dashboard updated and pagers dispatched.', color: 'text-neon-red' },
  { step: 4, icon: ShieldCheck, title: 'Firewall Response', desc: 'Dynamic WAF rule automatically applied to block IP.', color: 'text-neon-blue' },
  { step: 5, icon: DatabaseBackup, title: 'Incident Stored', desc: 'Encrypted PCAP logged to immutable forensics vault.', color: 'text-neon-green' },
];

export default function ReplaySimulation() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep(prev => {
          if (prev >= sequence.length) {
            setIsPlaying(false);
            return 0; // Or keep at max to show completion
          }
          return prev + 1;
        });
      }, 1500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <section className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
         <h3 className="text-neon-blue text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Reconstruction Engine</h3>
         <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Attack Replay Simulation</h2>
         <p className="text-slate-400 text-sm">Review exactly how the AI engine intercepts and neutralizes threats in real-time. Full timeline reconstruction.</p>
      </div>

      <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-8 max-w-4xl mx-auto">
         
         <div className="flex justify-center gap-4 mb-12">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 rounded-full flex items-center justify-center glass-panel-interactive hover:text-neon-blue text-white"
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
            </button>
            <button 
              onClick={() => { setActiveStep(0); setIsPlaying(false); }}
              className="w-12 h-12 rounded-full flex items-center justify-center glass-panel-interactive hover:text-neon-blue text-slate-400"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
         </div>

         <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-slate-800 rounded">
               <motion.div 
                 className="h-full bg-neon-blue"
                 initial={{ width: '0%' }}
                 animate={{ width: `${(Math.min(activeStep, sequence.length - 1)) / (sequence.length - 1) * 100}%` }}
                 transition={{ duration: 0.5 }}
               />
            </div>

            <div className="grid grid-cols-5 gap-2 relative z-10">
               {sequence.map((item, i) => (
                 <div key={i} className="flex flex-col items-center text-center">
                    <motion.div 
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-500 border
                        ${i <= activeStep ? 'bg-[#00D1FF]/10 border-[#00D1FF] shadow-[0_0_15px_rgba(0,209,255,0.3)]' : 'bg-slate-900 border-slate-700 text-slate-600'}
                      `}
                      animate={i === activeStep ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 1, repeat: i === activeStep ? Infinity : 0 }}
                    >
                      <item.icon className={`w-6 h-6 ${i <= activeStep ? item.color : ''}`} />
                    </motion.div>
                    <h4 className={`text-[10px] uppercase font-bold tracking-widest mb-2 ${i <= activeStep ? 'text-white' : 'text-slate-500'}`}>{item.title}</h4>
                    <p className={`text-[10px] ${i <= activeStep ? 'text-slate-400' : 'text-slate-600'} max-w-[120px] hidden md:block leading-relaxed`}>{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
         
      </div>
    </section>
  );
}
