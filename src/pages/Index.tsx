import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FAQ from "@/components/FAQ";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
