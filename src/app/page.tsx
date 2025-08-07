import Hero from "./components/Hero";
import Program from "./components/Program";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Partials/Footer";
import CalendlyEmbed from "./components/CalendlyEmbed";
import Bridge from "./components/Bridge";
import Audience from "./components/Audience";
import Features from "./components/Features";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div id="audience">
          <Audience />
        </div>
        <div id="community">
          <Testimonials />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="bridge">
          <Bridge />
        </div>
        <div id="the program">
          <Program />
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
