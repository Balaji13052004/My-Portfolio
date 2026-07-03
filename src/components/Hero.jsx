import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>
          Hi, I'm <span>Chinthakayala Balaji</span>
        </h1>
        <h2>Java Developer • Full-Stack Engineer</h2>
        <p>
          I build scalable, Strong robust Application using the Java Fullstack and
          solve complex problems with clean, optimized solutions in data structures
          and algorithms.
        </p>
        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
          Ready to Work
          </button>
          <button
            className="btn-outline"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </button>
          <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
           >
  <button className="btn-outline">
    My Resume
  </button>
</a>
        </div>
        <p className="hero-tagline">
          Bachelor of Technology  CSE   - Sri Venkateswara College of Engineering - 72.1%
        </p>
      </div>
      <div className="hero-right">
        <p className="hero-right-title">Currently focused on</p>
        <p className="hero-right-highlight">Java Fullstack Application</p>
        <p className="hero-right-subtext">
          Building scalable Java applications with Spring Boot, Hibernate, REST APIs, SQL, and modern web technologies. Passionate about backend development, clean code, and solving real-world software engineering problems.
        </p>
      </div>
    </section>
  );
}
