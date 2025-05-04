import Hero from "./components/Hero";
import Navbar from "./components/Partials/Navbar";
import Carousel from "./components/Carousel";
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
       <Carousel />
       <div id="program">
       <Program />
       </div>
        <div id="testimonials">
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
