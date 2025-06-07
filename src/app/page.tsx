import Hero from "./components/Hero";
import Navbar from "./components/Partials/Navbar";
import Program from "./components/Program";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Partials/Footer";
import CalendlyEmbed from "./components/Partials/CalendlyEmbed";
import Bridge from "./components/Bridge";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
       <Hero />
       <div id="the program">
       <Program />
       </div>
        <div id="community">
       <Testimonials />
       </div>
       <div id="bridge">
       <Bridge />
       </div>
      <div id="about">
       <About />
       </div>
      <div id="faq">
       <FAQ />
       </div>
       <div id="contact">
       <CalendlyEmbed />
       </div>
      </main>
      <Footer />
    </>
  );
}
