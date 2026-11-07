import { Atom, Braces, Code2, Database, Github, Server, Wind } from "lucide-react";
import { featuredTech } from "../config/site";
import Reveal from "../components/Reveal";

const icons = {
  React: Atom,
  JavaScript: Braces,
  "Node.js": Server,
  Express: Code2,
  MongoDB: Database,
  "Tailwind CSS": Wind,
  GitHub: Github,
};

export default function TechWall() {
  return (
    <section id="stack" className="tech-trust">
      <div className="shell">
        <div className="trust-heading">
          <span className="rule" aria-hidden="true" />
          <Reveal as="p" className="trust-title">Built with modern technologies</Reveal>
          <span className="rule" aria-hidden="true" />
        </div>
        <div className="tech-wall" aria-label="Technology stack">
          {featuredTech.map((technology, index) => {
            const Icon = icons[technology];
            return (
              <Reveal key={technology} delay={0.025 * index}>
                <span className="tech">
                  <Icon aria-hidden="true" /> {technology}
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
