import Hero from "./components/Hero";
import Navbar from "./components/Partials/Navbar";
import Program from "./components/Program";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Partials/Footer";

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
      <div id="about">
       <About />
       </div>
      <div id="faq">
       <FAQ />
       </div>
      </main>
      <Footer />
    </>
  );
}
