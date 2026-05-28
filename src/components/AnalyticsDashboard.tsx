import { Activity, ShieldCheck, Siren, Cpu } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { motion } from 'framer-motion';

const dataArea = [
  { time: '00:00', threats: 120 },
  { time: '04:00', threats: 200 },
  { time: '08:00', threats: 150 },
  { time: '12:00', threats: 400 },
  { time: '16:00', threats: 250 },
  { time: '20:00', threats: 180 },
  { time: '24:00', threats: 320 },
];

const dataBar = [
  { name: 'Brute Force', count: 4000 },
  { name: 'SQLi', count: 3000 },
  { name: 'Malware', count: 2000 },
  { name: 'DDoS', count: 2780 },
  { name: 'XSS', count: 1890 },
];

export default function AnalyticsDashboard() {
  return (
    <section id="dashboard" className="py-20 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row items-end justify-between mb-8">
        <div>
           <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-neon-blue/10 border border-neon-blue/20">
             <Cpu className="w-4 h-4 text-neon-blue" />
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">SYSTEM ANALYTICS</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Security Operation Center</h2>
        </div>
        <p className="text-slate-500 mt-4 md:mt-0 font-mono text-[10px] uppercase tracking-widest font-bold">
          LAST COMPILED: {new Date().toISOString().split('T')[0]}
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Active Monitored Nodes', value: '4,092', icon: Activity, color: 'text-neon-blue' },
          { label: 'Threats Mitigated', value: '89.2k', icon: ShieldCheck, color: 'text-neon-green' },
          { label: 'Critical Incidents', value: '12', icon: Siren, color: 'text-neon-red' },
          { label: 'AI Confidence', value: '99.9%', icon: Cpu, color: 'text-blue-300' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-4 flex flex-col justify-between h-32 hover:border-neon-blue/50 transition-colors"
          >
            <div className="flex justify-between items-start">
               <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest max-w-[100px]">{stat.label}</span>
               <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
            <div className="text-3xl font-bold text-white tracking-tighter">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts area */}
      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6 h-[400px] flex flex-col"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Traffic Volumetric Analysis</h3>
            <span className="px-2 py-1 rounded bg-black border border-slate-800 text-[9px] font-bold uppercase tracking-widest text-[#00D1FF]">24H TIMEFRAME</span>
          </div>
          <div className="flex-1 w-full relative">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={dataArea}>
                 <defs>
                   <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4}/>
                     <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <XAxis dataKey="time" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                 <YAxis stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                 <Tooltip 
                   contentStyle={{ backgroundColor: '#020408', border: '1px solid #1e293b', borderRadius: '8px' }}
                   itemStyle={{ color: '#00D1FF' }}
                 />
                 <Area type="monotone" dataKey="threats" stroke="#00D1FF" strokeWidth={2} fillOpacity={1} fill="url(#colorThreats)" />
               </AreaChart>
             </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6 h-[400px] flex flex-col"
        >
          <div className="mb-6">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Attack Vectors</h3>
            <p className="text-slate-600 text-[10px] uppercase font-bold mt-1">Classification breakdown</p>
          </div>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataBar} layout="vertical" margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{ fill: 'rgba(30,41,59,0.5)' }}
                  contentStyle={{ backgroundColor: '#020408', border: '1px solid #1e293b', borderRadius: '8px' }} 
                />
                <Bar dataKey="count" fill="#00D1FF" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
