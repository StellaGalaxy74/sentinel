import { motion } from 'framer-motion';
import { Globe, MapPin, Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AttackMap() {
  const [nodes, setNodes] = useState<{ id: string; x: number; y: number; active: boolean }[]>([
    { id: '1', x: 25, y: 35, active: false }, // NA West
    { id: '2', x: 30, y: 38, active: false }, // NA East
    { id: '3', x: 50, y: 30, active: false }, // EU
    { id: '4', x: 52, y: 35, active: false }, // EU East
    { id: '5', x: 75, y: 40, active: false }, // AS East
    { id: '6', x: 70, y: 45, active: false }, // AS SE
    { id: '7', x: 45, y: 55, active: false }, // AF
    { id: '8', x: 32, y: 65, active: false }, // SA
    { id: '9', x: 80, y: 65, active: false }, // AU
  ]);

  useEffect(() => {
    // Randomly activate nodes to simulate attacks
    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => {
        if (Math.random() > 0.8) {
          return { ...node, active: true };
        }
        if (node.active && Math.random() > 0.4) {
          return { ...node, active: false };
        }
        return node;
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
         <div className="flex items-center gap-3">
           <div className="w-8 h-8 bg-neon-blue/10 rounded-lg shadow-[0_0_15px_rgba(0,209,255,0.2)] flex items-center justify-center border border-neon-blue/20">
             <Globe className="w-4 h-4 text-neon-blue" />
           </div>
           <h2 className="text-2xl font-bold tracking-tight text-white">Global Threat Topology</h2>
         </div>
      </div>

      <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-2 md:p-6 relative overflow-hidden h-[300px] md:h-[500px]">
        {/* Mock Map Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
            {/* Simple SVG World Map abstraction */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-blue-500 fill-current">
               <path d="M15,30 Q20,25 25,35 T30,40 T35,30 T20,40 Z M40,25 Q45,20 55,30 T60,25 T50,35 Z M65,30 Q75,25 80,40 T70,45 T60,35 Z M25,50 Q30,55 35,65 T20,60 Z M45,45 Q50,40 55,50 T50,60 Z M70,55 Q80,60 75,70 T65,65 Z"/>
            </svg>
        </div>
        
        {/* Overlay Grid */}
        <div className="absolute inset-0 cyber-grid opacity-30"></div>

        {/* Nodes */}
        {nodes.map(node => (
          <div 
            key={node.id} 
            className="absolute transition-all duration-500" 
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            {node.active && (
              <motion.div 
                initial={{ scale: 0, opacity: 0 }} 
                animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -inset-4 border border-neon-red rounded-full"
              />
            )}
            <div className={`relative z-10 w-2 h-2 rounded-full ${node.active ? 'bg-neon-red shadow-[0_0_10px_#ef4444]' : 'bg-neon-blue opacity-50'}`}></div>
          </div>
        ))}
        
        <div className="absolute bottom-4 left-4 right-4 md:left-8 flex justify-between items-end pointer-events-none">
          <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-4 pb-3 pr-8 inline-block shadow-lg">
             <div className="flex items-center gap-2 mb-2">
               <Activity className="w-4 h-4 text-neon-red" />
               <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">ACTIVE REGIONS</span>
             </div>
             <div className="text-2xl font-bold tracking-tighter text-white">{nodes.filter(n => n.active).length} / {nodes.length}</div>
          </div>
          
          <div className="hidden md:flex font-mono text-[10px] text-neon-blue flex-col items-end opacity-70">
            <span>LAT: 37.7749 :: LNG: -122.4194</span>
            <span>UPLINK: ENCRYPTED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
