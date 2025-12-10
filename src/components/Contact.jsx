import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">Let’s build something together</p>

      <div className="contact-grid">
        <div className="contact-details">
          <p>
            <span>Email</span>
            <a href="mailto:chinthakayalabalaji1322@gmail.com">
              chinthakayalabalaji1322@gmail.com
            </a>
          </p>
          <p>
            <span>Phone</span>
            +91 75699 46472
          </p>
          <p>
            <span>GitHub</span>
            <a href="https://github.com/Balaji13052004" target="_blank" rel="noreferrer">
              github.com/Balaji13052004
            </a>
          </p>
          <p className="contact-note">
            Feel free to reach out for internship opportunities, full-stack roles, or
            collaboration on interesting MERN and backend-heavy projects.
          </p>
        </div>
      </div>
    </section>
  );
}
