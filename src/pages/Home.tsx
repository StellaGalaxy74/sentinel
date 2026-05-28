import HeroSection from '../components/HeroSection';
import AttackMap from '../components/AttackMap';
import FeaturesSection from '../components/FeaturesSection';

export default function Home() {
  return (
    <main className="pt-24 min-h-screen">
      <HeroSection />
      <div className="w-full h-px bg-slate-800/50 my-10 relative z-10"></div>
      <AttackMap />
      <div className="w-full h-px bg-slate-800/50 my-10 relative z-10"></div>
      <FeaturesSection />
    </main>
  );
}
