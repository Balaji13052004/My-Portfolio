import React from "react";

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">Where I've applied my skills</p>

      <div className="card-grid">
        <div className="card">
          <h3>MERN Stack App Developer Intern</h3>
          <p className="card-meta">
            SmartBridge Educational Services Pvt. Ltd • Remote • Jul 2025 – Sep 2025
          </p>
          <ul className="card-list">
            <li>Developed the DocSpot application with a refined, scalable backend design.</li>
            <li>
              Built authentication, consultation booking flows, and admin features for scam
              detection and review.
            </li>
            <li>Integrated notification logic to remind users about upcoming consultations.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
