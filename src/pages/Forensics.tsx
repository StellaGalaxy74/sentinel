import ForensicsVault from '../components/ForensicsVault';
import ReplaySimulation from '../components/ReplaySimulation';

export default function Forensics() {
  return (
    <main className="pt-24 min-h-screen">
      <ForensicsVault />
      <div className="w-full h-px bg-slate-800/50 my-10 relative z-10"></div>
      <ReplaySimulation />
    </main>
  );
}
