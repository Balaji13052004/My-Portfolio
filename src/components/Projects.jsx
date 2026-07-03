import React from "react";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Some things I've built recently</p>

      <div className="card-grid">
        <div className="card">
          <h3>DocSpot – Appointment Booking Platform</h3>
          <p className="card-meta">Java Full Stack • Jul 2025 – Sep 2025</p>
          <p>
            A scalable consultation booking platform with dedicated interfaces for users,
            doctors, and admins.
          </p>
          <ul className="card-list">
            <li>Built 8+ REST APIs using Springboot and Hibernate for user, doctor, and admin management.
</li>
            <li>Implemented role-based access control and admin approval workflows.
</li>
            <li>Designed scalable backend architecture for future feature integrations.
</li>
            <li>Worked on database design, CRUD operations, and backend development.
</li>
          </ul>
        </div>

        <div className="card">
          <h3>ATM System – Console Applicatio</h3>
          <p className="card-meta">C Language • Feb 2024 – Apr 2024</p>
          <p>
            A console-based ATM simulation implementing core banking operations and secure
            PIN workflows.
          </p>
          <ul className="card-list">
            <li>Enforced strict 4-digit PIN rules using width-limited input handling.</li>
            <li>Implemented PIN change confirmation flow to avoid accidental updates.</li>
            <li>Structured modular functions for core operations (withdraw, deposit, balance).</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
