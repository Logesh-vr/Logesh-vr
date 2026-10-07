import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Menu,
  X,
} from "lucide-react";
import { categories, projects, type Category } from "./data/projects";
import ProjectVisual from "./components/ProjectVisual";

const email = "logeshrv2006@gmail.com";
const github = "https://github.com/Logesh-vr";
const linkedin = "https://www.linkedin.com/in/logesh-rajaraman-665798323/";
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState<Category>("All projects");
  const [copyStatus, setCopyStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Copy unavailable. Use the email link.");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyStatus(""), 4000);
  }
  const visibleProjects = projects.filter(
    (project) => category === "All projects" || project.category === category,
  );
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="wordmark" href="#home" aria-label="Logesh, home">
            logesh<span> / </span>vr<span className="brand-dot">.</span>
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav
            id="navigation"
            className={menuOpen ? "navigation is-open" : "navigation"}
            aria-label="Main navigation"
          >
            {[
              ["Work", "#work"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="nav-github"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section id="home" className="hero shell" aria-labelledby="hero-title">
          <div className="hero-top">
            <span className="eyebrow">
              <span className="signal" /> COMPUTER SCIENCE · FULL STACK · AI
            </span>
            <span className="edition">A WORK IN PROGRESS. ALWAYS.</span>
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title">
                Curiosity.
                <br />
                Code.
                <br />
                <span>Something useful.</span>
              </h1>
              <p>
                I’m Logesh, a computer science student turning ideas into
                software—across web development, AI, and the things that catch
                my curiosity.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#work">
                  Explore my work <ArrowDown size={18} />
                </a>
                <a className="text-link" href={`mailto:${email}`}>
                  Say hello <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-grid" />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="art-core">
                L<span>↗</span>
              </div>
              <span className="art-coordinate coordinate-top">
                IDEA → ITERATION
              </span>
              <span className="art-coordinate coordinate-bottom">
                BUILD / LEARN / REPEAT
              </span>
              <span className="art-plus">+</span>
            </div>
          </div>
          <div className="hero-bottom">
            <span>Be better than yesterday.</span>
            <a href="#work">
              SELECTED WORK <ArrowDown size={14} />
            </a>
          </div>
        </section>
        <section
          id="work"
          className="work-section"
          aria-labelledby="work-title"
        >
          <div className="shell">
            <div className="section-heading">
              <div>
                <span className="eyebrow">01 / SELECTED WORK</span>
                <h2 id="work-title">
                  Ideas, made tangible<span>.</span>
                </h2>
              </div>
              <p>
                Useful problems. Different perspectives.
                <br />A few things I’ve been building.
              </p>
            </div>
            <div
              className="project-filters"
              role="group"
              aria-label="Filter projects"
            >
              {categories.map((value) => (
                <button
                  key={value}
                  aria-pressed={category === value}
                  onClick={() => setCategory(value)}
                >
                  {value}
                  {value === "All projects" && <span>03</span>}
                </button>
              ))}
            </div>
            <p className="sr-only" role="status">
              {visibleProjects.length} projects shown
            </p>
            <div className="project-grid">
              {visibleProjects.map((project) => (
                <article className="project-card" key={project.slug}>
                  <ProjectVisual variant={project.visual} />
                  <div className="project-body">
                    <div className="project-meta">
                      <span>{project.kind}</span>
                      <span>0{projects.indexOf(project) + 1}</span>
                    </div>
                    <h3>
                      {project.name}
                      <span>{project.headline}</span>
                    </h3>
                    <p>{project.description}</p>
                    <ul
                      className="stack"
                      aria-label={`${project.name} technologies`}
                    >
                      {project.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <details>
                      <summary>Project notes</summary>
                      <p>{project.detail}</p>
                    </details>
                    <a
                      className="project-link"
                      href={`${github}/${project.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore {project.name} <ArrowUpRight size={18} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="work-footer">
              <span>Domain illustrations above, not product screenshots.</span>
              <a
                className="text-link"
                href={`${github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
              >
                More on GitHub <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="about-section shell"
          aria-labelledby="about-title"
        >
          <div className="about-intro">
            <span className="eyebrow">02 / THE PERSON BEHIND THE CODE</span>
            <h2 id="about-title">
              A student.
              <br />A builder.
              <br />
              <em>Always curious.</em>
            </h2>
            <div className="personal-note">
              <span>OFF THE KEYBOARD</span>
              <p>
                Training in the gym. Exploring hardware. Finding the next thing
                to learn.
              </p>
            </div>
          </div>
          <div className="about-content">
            <p className="about-lead">
              I like understanding how things work—and then seeing what I can
              make with them.
            </p>
            <p>
              I’m pursuing a B.Tech in Computer Science. My projects span
              full-stack applications, computer vision, and practical tools for
              everyday problems. I learn by building, testing ideas, and
              improving what comes next.
            </p>
            <p>
              The same mindset follows me outside software: stay consistent,
              stay curious, and be better than yesterday.
            </p>
            <div className="skills">
              {[
                [
                  "Web & applications",
                  "React · TypeScript · Node.js · Flutter",
                ],
                ["APIs & data", "Python · FastAPI · PostgreSQL · SQL"],
                ["AI & exploration", "OpenCV · MediaPipe · NumPy · Pandas"],
              ].map(([title, skills], i) => (
                <div key={title}>
                  <span>0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{skills}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="shell">
            <span className="eyebrow">03 / START A CONVERSATION</span>
            <div className="contact-layout">
              <h2 id="contact-title">
                Good things start
                <br />
                with <em>a hello.</em>
              </h2>
              <div>
                <p>
                  A project, a collaboration, or an interesting idea?
                  <br />
                  I’d love to hear about it.
                </p>
                <a className="email-link" href={`mailto:${email}`}>
                  {email}
                  <ArrowUpRight size={25} />
                </a>
                <div className="copy-row">
                  <button className="copy-button" onClick={copyEmail}>
                    {copyStatus === "Email copied" ? (
                      <Check size={15} />
                    ) : (
                      <Copy size={15} />
                    )}{" "}
                    Copy email
                  </button>
                  <span role="status">{copyStatus}</span>
                </div>
              </div>
            </div>
            <div className="contact-social">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github size={18} /> GitHub <ArrowUpRight size={15} />
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowUpRight size={15} />
              </a>
              <a href="#home">Back to top ↑</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <span>© {new Date().getFullYear()} Logesh Rajaraman</span>
        <span>Built with curiosity. Improved with practice.</span>
      </footer>
    </>
  );
}
