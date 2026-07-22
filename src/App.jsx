import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Lineup from '@/components/sections/Lineup';
import Service from '@/components/sections/Service';
import Visit from '@/components/sections/Visit';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Lineup />
        <Service />
        <Visit />
      </main>
      <Footer />
    </>
  );
}