import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "../sections/Hero";
import TechWall from "../sections/TechWall";
import AboutIntro from "../sections/AboutIntro";
import Services from "../sections/Services";
import Skills from "../sections/Skills";
import Work from "../sections/Work";
import Journey from "../sections/Journey";
import About from "../sections/About";
import Contact from "../sections/Contact";

export default function Home({ ready }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const selector = location.state?.scrollTo;
    if (!selector) return undefined;
    const frame = requestAnimationFrame(() => {
      document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
      navigate(location.pathname, { replace: true, state: null });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.state, navigate]);

  return (
    <>
      <Hero ready={ready} />
      <TechWall />
      <AboutIntro />
      <Services />
      <Skills />
      <Work />
      <Journey />
      <About />
      <Contact />
    </>
  );
}
