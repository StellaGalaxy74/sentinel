import { Server, Activity, Lock, Database, Share2, Shield, Eye, ScanSearch, Cpu, PlaySquare, FileText, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const featuresList = [
  { icon: Activity, title: 'Real-Time Alerts' },
  { icon: Shield, title: 'Auto Firewall Blocking' },
  { icon: Cpu, title: 'AI Threat Analysis' },
  { icon: ScanSearch, title: 'Packet Monitoring' },
  { icon: Search, title: 'Digital Forensics' },
  { icon: PlaySquare, title: 'Attack Replay System' },
  { icon: FileText, title: 'PDF/CSV Export' },
  { icon: Users, title: 'Role-Based Access' },
  { icon: Database, title: 'Honeypot Detection' },
  { icon: Share2, title: 'IP Tracking' },
  { icon: Eye, title: 'Incident Reporting' },
  { icon: Server, title: 'Threat Logging' },
];

// Need to import Search properly if missing, substituting with ScanSearch for visual variety
import { Search } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
         <h3 className="text-neon-blue text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Core Modules</h3>
         <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Enterprise Capabilities</h2>
         <p className="text-slate-400 text-sm">Everything a modern Security Operations Center needs.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {featuresList.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-5 bg-slate-900/40 border border-slate-800/50 rounded-2xl flex items-center gap-4 group cursor-pointer hover:border-[#00D1FF]/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-black border border-slate-800 flex items-center justify-center group-hover:bg-[#00D1FF]/10 group-hover:border-[#00D1FF]/50 shadow-none group-hover:shadow-[0_0_15px_rgba(0,209,255,0.3)] transition-all">
              <f.icon className="w-5 h-5 text-slate-400 group-hover:text-neon-blue transition-colors" />
            </div>
            <span className="font-bold text-slate-300 group-hover:text-white text-xs uppercase tracking-widest">{f.title}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
