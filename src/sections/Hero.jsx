import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowDown, ArrowUpRight, Atom, Braces, Check, Code2, Database, Github, Phone, Server, Wind,
} from "lucide-react";
import { featuredTech, siteConfig } from "../config/site";
import Magnetic from "../components/Magnetic";
import { useReducedMotion } from "../hooks";

const techIcons = { React: Atom, "Node.js": Braces, MongoDB: Database, Express: Server, "Tailwind CSS": Wind, GitHub: Github };
const technologies = featuredTech
  .filter((label) => label !== "JavaScript")
  .map((label, index) => ({
    label: label === "Express" ? "Express.js" : label,
    icon: techIcons[label],
    placement: ["react", "node", "express", "mongo", "tailwind", "github"][index],
  }));

export default function Hero({ ready }) {
  const root = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ready) return;
    root.current.classList.add("armed");
    if (reduced) {
      gsap.set(root.current.querySelectorAll("[data-anim]"), { opacity: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .from("[data-anim='badge']", { opacity: 0, y: 14, duration: 0.8 })
        .from("[data-anim='line'] span", { yPercent: 115, duration: 1.15, stagger: 0.09 }, "-=0.5")
        .from("[data-anim='lead']", { opacity: 0, y: 18, duration: 0.9 }, "-=0.75")
        .from("[data-anim='cta'] > *", { opacity: 0, y: 16, duration: 0.7, stagger: 0.08 }, "-=0.65")
        .from("[data-anim='canvas']", { opacity: 0, y: 18, duration: 0.9 }, "-=0.7")
        .from("[data-anim='cue']", { opacity: 0, duration: 0.6 }, "-=0.4");
    }, root);
    return () => ctx.revert();
  }, [ready, reduced]);

  const scrollTo = (sel) => (e) => {
    e.preventDefault();
    document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className={`hero${reduced ? " armed" : ""}`} ref={root}>
      <div className="shell hero-grid">
        <div className="hero-copy">
          <span className="badge" data-anim="badge">
            <i className="dot" aria-hidden="true" />
            <span>Freelance Developer</span>
            <span className="badge-divider" aria-hidden="true">·</span>
            <span>Available for New Projects</span>
          </span>

          <h1 className="display">
            <span className="line" data-anim="line"><span>I build websites</span></span>
            <span className="line" data-anim="line"><span>and web apps that</span></span>
            <span className="line hero-highlight" data-anim="line"><span><em>work for you.</em></span></span>
          </h1>

          <p className="lead" data-anim="lead">
            Modern, fast and scalable web solutions using the latest technologies like React, Node.js and MERN.
          </p>

          <div className="hero-ctas" data-anim="cta">
            <Magnetic>
              <a className="btn btn-solid" href="#work" onClick={scrollTo("#work")}>
                Explore My Work <ArrowUpRight />
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href="#about" onClick={scrollTo("#about")}>
                About Abhishek <ArrowUpRight />
              </a>
            </Magnetic>
          </div>

          <div className="hero-contact" data-anim="cue">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}><Phone size={15} /> {siteConfig.phone}</a>
            <span><Check size={15} /> Direct contact from first chat to launch</span>
          </div>
          <a className="scrollcue" href="#services" onClick={scrollTo("#services")}>
            See how I can help <ArrowDown size={14} />
          </a>
        </div>

        <div className="hero-visual" data-anim="canvas" role="img" aria-label="Laptop with code editor, surrounded by React, Node.js, MongoDB, Express.js, Tailwind CSS and GitHub technology cards">
          <div className="visual-orbit orbit-a" aria-hidden="true" />
          <div className="visual-orbit orbit-b" aria-hidden="true" />
          <div className="laptop" aria-hidden="true">
            <div className="laptop-screen">
              <div className="editor-topbar">
                <span className="editor-lights"><i /><i /><i /></span>
                <span>abhishek / portfolio.jsx</span>
                <span className="editor-live"><i /> LIVE</span>
              </div>
              <div className="editor-body">
                <div className="editor-gutter"><span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span></div>
                <div className="editor-code">
                  <span className="code-line"><b>const</b> developer = <strong>{"{"}</strong></span>
                  <span className="code-line indent"><em>name</em>: <i>"Abhishek"</i>,</span>
                  <span className="code-line indent"><em>stack</em>: [<i>"React"</i>, <i>"Node.js"</i>],</span>
                  <span className="code-line indent"><em>focus</em>: <i>"building for people"</i>,</span>
                  <span className="code-line"><strong>{"}"}</strong>;</span>
                  <span className="code-line"><b>export default</b> developer;</span>
                </div>
                <span className="code-mark"><Code2 aria-hidden="true" /></span>
              </div>
            </div>
            <div className="laptop-base"><span className="laptop-trackpad" /></div>
          </div>
          {technologies.map(({ label, icon: Icon, placement }) => (
            <div className={`floating-tech tech-${placement}`} key={label} aria-hidden="true">
              <Icon /> <span>{label}</span>
            </div>
          ))}
          <span className="visual-caption"><i /> BUILT FOR THE MODERN WEB</span>
        </div>
      </div>
    </section>
  );
}
