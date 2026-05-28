import { Menu, X } from 'lucide-react';
import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return `transition-colors ${location.pathname === path ? 'text-neon-blue border-b border-neon-blue' : 'hover:text-white'}`;
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 rounded-xl px-6 h-16 bg-slate-900/40 border border-slate-800/50 backdrop-blur-md max-w-7xl mx-auto">
      <div className="flex items-center justify-between h-full">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg shadow-[0_0_15px_rgba(0,209,255,0.5)] flex items-center justify-center bg-neon-blue relative">
            <div className="w-4 h-4 border-2 border-black rotate-45 transform pointer-events-none"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white flex items-center gap-1">
            SENTINEL<span className="text-neon-blue font-bold">.OS</span>
          </span>
        </Link>
        
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <Link to="/dashboard" className={getLinkClass('/dashboard')}>Dashboard</Link>
          <Link to="/threats" className={getLinkClass('/threats')}>Threat Feed</Link>
          <Link to="/forensics" className={getLinkClass('/forensics')}>Forensics</Link>
          <Link to="/ai" className={getLinkClass('/ai')}>Intelligence</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
           <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="text-[10px] uppercase font-bold text-emerald-500 tracking-widest">System Secure</span>
           </div>
           
           <div className="text-right">
             <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Session Time</div>
             <div className="text-xs font-mono text-slate-300 tracking-tighter">04:12:33:89</div>
           </div>
           <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center bg-slate-800 overflow-hidden">
             <div className="w-full h-full bg-gradient-to-tr from-neon-blue to-neon-red opacity-20"></div>
           </div>
        </div>

        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-800/80 mt-4 bg-slate-900/90 rounded-b-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2 flex flex-col">
              <MobileNavLink to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</MobileNavLink>
              <MobileNavLink to="/threats" onClick={() => setIsOpen(false)}>Threat Feed</MobileNavLink>
              <MobileNavLink to="/ai" onClick={() => setIsOpen(false)}>Intelligence</MobileNavLink>
              <MobileNavLink to="/forensics" onClick={() => setIsOpen(false)}>Forensics</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function MobileNavLink({ to, onClick, children }: { to: string; onClick: () => void; children: ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} onClick={onClick} className={`block px-3 py-2 text-[10px] uppercase font-bold transition-colors ${isActive ? 'text-neon-blue' : 'text-slate-300 hover:text-neon-blue'}`}>
      {children}
    </Link>
  );
}
