import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <LoadingScreen />
      <ScrollProgress />
      <FloatingShapes />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
