import { BrainCircuit, Fingerprint, Shield, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IntelligenceModule() {
  return (
    <section className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="w-16 h-16 bg-neon-blue/10 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,209,255,0.2)] border border-neon-blue/30">
          <BrainCircuit className="w-8 h-8 text-neon-blue" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">AI Threat Intelligence</h2>
        <p className="text-slate-400 text-sm leading-relaxed">Predictive threat analysis powered by neural networks. Stop attacks before they happen with behavioral anomaly detection.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Eye, title: 'Behavioral Anomalies', desc: 'Monitors baseline network activity and isolates variations indicative of zero-day exploits.' },
          { icon: Shield, title: 'Auto Firewall Mitigation', desc: 'AI engine automatically rewrites IPTables and applies WAF rules dynamically within milliseconds.' },
          { icon: Fingerprint, title: 'Signature Generation', desc: 'Generates polymorphic threat signatures on the fly, propagating them to all connected nodes.' }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-8 relative overflow-hidden group hover:border-[#00D1FF]/50 transition-colors duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <feature.icon className="w-32 h-32 text-white" />
            </div>
            <feature.icon className="w-8 h-8 text-neon-blue mb-6 relative z-10" />
            <h3 className="text-[10px] font-bold text-white tracking-widest uppercase mb-3 relative z-10">{feature.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed relative z-10">{feature.desc}</p>
            
            <div className="mt-8 pt-4 border-t border-slate-800/50 flex items-center justify-between text-sm relative z-10">
              <span className="text-slate-500 font-bold text-[9px] uppercase tracking-widest">STATUS</span>
              <span className="text-neon-green font-mono text-[10px] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-neon-green/80 animate-pulse"></span> ACTIVE</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
