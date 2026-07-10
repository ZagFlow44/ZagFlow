import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Platform from "../components/sections/Platform";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import Pricing from "../components/sections/Pricing";
import Footer from "../components/layout/Footer";
import Faq from "../components/sections/Faq";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816]">
      <Navbar />
      <Hero />
      <Platform />
      <Services />
      <Process />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}