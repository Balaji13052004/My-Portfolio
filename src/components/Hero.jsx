import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>
          Hi, I'm <span>Chinthakayala Balaji</span>
        </h1>
        <h2>MERN Stack Developer • Full-Stack Engineer</h2>
        <p>
          I build scalable, user-centric web applications using the MERN stack and
          solve complex problems with clean, optimized solutions in data structures
          and algorithms.
        </p>
        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Hire Me
          </button>
          <button
            className="btn-outline"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </button>
        </div>
        <p className="hero-tagline">
          Bachelor of Technology  CSE   - Sri Venkateswara College of Engineering - 73%
        </p>
      </div>
      <div className="hero-right">
        <p className="hero-right-title">Currently focused on</p>
        <p className="hero-right-highlight">MERN Stack & DATA ANALYTICS</p>
        <p className="hero-right-subtext">
          500+ DSA problems solved across LeetCode and GeeksforGeeks. Ranked among
          the top competitive coders while building production-ready full stack apps.
        </p>
      </div>
    </section>
  );
}
