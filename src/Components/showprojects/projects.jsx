import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Nav from "../Home/nav/Nav";
import Footer from "../Home/Footer/Footer";
import "./projects.css";

const projects = [
 
  { href: "https://tarek-goher.github.io/grouping/egy/index.html",          title: "Ancient Egypt",    desc: "Historical journey through pharaonic era"   },
  { href: "https://tarek-goher.github.io/grouping/markting/index.html",     title: "Marketing Agency", desc: "Modern agency landing presence"              },
  { href: "https://tarek-goher.github.io/grouping/s_cars/index.html",       title: "Sports Cars",      desc: "High-performance automotive showcase"        },
   { href: "https://tarek-goher.github.io/grouping/e-com/index.html",       title: "E-Commerce",       desc: "Full-featured online store experience"       },
  { href: "https://tarek-goher.github.io/grouping/restaurant/index.html",   title: "Restaurant Landing",desc: "Elegant food & dining experience"           },
  { href: "https://tarek-goher.github.io/grouping/web_ai/index.html",       title: "Tech Conference",  desc: "AI & technology event platform"              },
  { href: "https://tarek-goher.github.io/grouping/swift/index.html",        title: "Swift Delivery",   desc: "Fast logistics & delivery service"           },
  { href: "https://tarek-goher.github.io/grouping/store/index.html",        title: "Premium Store",    desc: "Luxury retail product showcase"              },
];

// Microlink generates a live screenshot for any URL
const screenshotUrl = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:   { opacity: 0, y: 40 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 80, damping: 14 } },
};

function ProjectCard({ project }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="proj-card"
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Screenshot Preview */}
      <div className="proj-card-image">
        {!imgLoaded && (
          <div className="proj-card-skeleton">
            <div className="skeleton-shimmer" />
          </div>
        )}
        <img
          src={screenshotUrl(project.href)}
          alt={project.title}
          onLoad={() => setImgLoaded(true)}
          style={{ opacity: imgLoaded ? 1 : 0 }}
        />
        <div className="proj-card-overlay">
          <span className="proj-overlay-btn">
            View Live
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </span>
        </div>
      </div>

      {/* Card Info */}
      <div className="proj-card-body">
        <h3 className="proj-card-title">{project.title}</h3>
        <p className="proj-card-desc">{project.desc}</p>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const particlesRef = useRef(null);

  useEffect(() => {
    if (particlesRef.current) {
      for (let i = 0; i < 40; i++) {
        const particle = document.createElement("div");
        particle.className = "proj-particle";
        particle.style.setProperty("--left",     `${Math.random() * 100}%`);
        particle.style.setProperty("--top",      `${Math.random() * 100}%`);
        particle.style.setProperty("--size",     `${Math.random() * 8 + 2}px`);
        particle.style.setProperty("--duration", `${Math.random() * 10 + 10}s`);
        particle.style.setProperty("--delay",    `${Math.random() * 5}s`);
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  return (
    <>
      <Nav />
      <div className="projects-page">
        <div className="proj-particles-container" ref={particlesRef} />
        <div className="proj-gradient-overlay" />

        <div className="proj-content">
          {/* Header */}
          <motion.div
            className="proj-header"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, type: "spring", stiffness: 70 }}
          >
            <span className="proj-badge">Our Work</span>
            <h1 className="proj-title">
              Featured <span className="proj-title-accent">Templates</span>
            </h1>
            <p className="proj-subtitle">
              Explore our handcrafted web templates — each one built with
              precision, creativity, and modern technology.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            className="proj-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}