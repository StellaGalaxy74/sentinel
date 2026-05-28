import { Shield, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#020408] pt-16 pb-8 relative z-10 overflow-hidden">
       {/* Background accent */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 relative z-10">
           
           <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg shadow-[0_0_15px_rgba(0,209,255,0.5)] flex items-center justify-center bg-neon-blue relative">
                  <div className="w-4 h-4 border-2 border-black rotate-45 transform pointer-events-none"></div>
                </div>
                <span className="font-bold text-xl tracking-tighter text-white">
                  SENTINEL<span className="text-neon-blue">.OS</span>
                </span>
             </div>
             <p className="text-slate-400 max-w-sm mb-6 leading-relaxed text-sm">
               Next-generation cybersecurity intelligence. Protecting enterprise networks with autonomous AI response and immutable forensics.
             </p>
             <div className="flex items-center gap-4">
               {[Github, Twitter, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-lg bg-black border border-slate-800 flex items-center justify-center text-slate-400 hover:text-neon-blue hover:border-neon-blue transition-all">
                   <Icon className="w-4 h-4" />
                 </a>
               ))}
             </div>
           </div>

           <div>
             <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Platform</h4>
             <ul className="space-y-3">
               {['Dashboard', 'Live Map', 'AI Intelligence', 'Forensics Vault', 'Compliance'].map((item) => (
                 <li key={item}>
                   <a href="#" className="text-slate-400 hover:text-neon-blue transition-colors text-xs font-bold uppercase tracking-widest">{item}</a>
                 </li>
               ))}
             </ul>
           </div>

           <div>
             <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Legal & Connect</h4>
             <ul className="space-y-3">
               {['Documentation', 'API Access', 'Privacy Policy', 'Terms of Service', 'SOC Contact'].map((item) => (
                 <li key={item}>
                   <a href="#" className="text-slate-400 hover:text-neon-blue transition-colors text-xs font-bold uppercase tracking-widest">{item}</a>
                 </li>
               ))}
             </ul>
           </div>
         </div>

         <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 text-[10px] font-bold uppercase tracking-widest text-slate-600">
           <div className="flex gap-6">
             <span>ENCRYPTION: AES-256-GCM</span>
             <span>PROTOCOL: TLS 1.3</span>
           </div>
           <p>© {new Date().getFullYear()} SENTINEL AI SYSTEMS • ALL RIGHTS RESERVED.</p>
           <p className="flex items-center gap-2 text-emerald-500">
             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
             SYSTEM STATUS: 100%
           </p>
         </div>
       </div>
    </footer>
  );
}
