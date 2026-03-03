import { useEffect } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

function App() {
  const { observe } = useIntersectionObserver({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Observe all sections with fade-in class
      const fadeElements = document.querySelectorAll(".fade-in");
      fadeElements.forEach((el) => {
        observe(el);
        // Immediately add show class for staggered animations
        setTimeout(() => {
          el.classList.add('show');
        }, 100); // Small delay for each element
      });
      
      // Fallback: show elements after 2 seconds if IntersectionObserver fails
      const fallbackTimer = setTimeout(() => {
        fadeElements.forEach((el) => {
          el.classList.add('show');
        });
      }, 2000);
      
      return () => clearTimeout(fallbackTimer);
    }, 100);

    return () => clearTimeout(timer);
  }, [observe]);

  return (
    <ErrorBoundary>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;