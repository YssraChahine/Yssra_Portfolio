import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import OpenToWork from "@/components/OpenToWork";
import Skills from "@/components/Skills";
import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <OpenToWork />
        <Skills />
        <Certification />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
