/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ThreatFeed from './pages/ThreatFeed';
import Forensics from './pages/Forensics';
import Intelligence from './pages/Intelligence';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#020408] text-slate-300 font-sans selection:bg-neon-blue/30 overflow-x-hidden relative flex flex-col">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none fixed"></div>
        
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/threats" element={<ThreatFeed />} />
            <Route path="/forensics" element={<Forensics />} />
            <Route path="/ai" element={<Intelligence />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}
