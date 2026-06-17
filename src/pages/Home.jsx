import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import DifferenceSection from '../components/DifferenceSection.jsx';
import FeaturesSection from '../components/FeaturesSection.jsx';
import ShowcaseSection from '../components/ShowcaseSection.jsx';
import HelpSection from '../components/HelpSection.jsx';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-text-dark">
      <Navbar />
      <Hero />
      <DifferenceSection />
      <FeaturesSection />
      <ShowcaseSection />
      <HelpSection />
    </main>
  );
}
