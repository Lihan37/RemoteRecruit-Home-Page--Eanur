import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import DifferenceSection from '../components/DifferenceSection.jsx';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-text-dark">
      <Navbar />
      <Hero />
      <DifferenceSection />
    </main>
  );
}
