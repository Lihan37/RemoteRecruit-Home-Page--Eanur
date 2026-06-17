import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-text-dark">
      <Navbar />
      <Hero />
    </main>
  );
}
