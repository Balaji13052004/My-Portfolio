import React from "react";

export default function Achievements() {
  return (
    <section id="achievements">
      <h2 className="section-title">Achievements & Contributions</h2>
      <p className="section-subtitle">Highlights from my learning journey</p>

      <div className="card-grid">
        <div className="card">
          <h3>Courses</h3>
          <ul className="card-list">
            <li>Completed Foundational Course on Aritifical Intelligence at Infosys Springboard</li>
            <li>Completed Java Full Stack internship from Smartbridge Edu-Private Limited </li>
          </ul>
        </div>

        <div className="card">
          <h3>Technical Events</h3>
          <ul className="card-list">
            <li>
              Contributed as a Backend Developer in Team Projects at College level Competition.
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Certifications</h3>
          <ul className="card-list">
            <li>Certified AI expert from Infosys</li>
            <li> Certified IBM Skillsbuilder On GeneraƟve AI 
</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
