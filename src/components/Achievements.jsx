import React from "react";

export default function Achievements() {
  return (
    <section id="achievements">
      <h2 className="section-title">Achievements & Contributions</h2>
      <p className="section-subtitle">Highlights from my learning journey</p>

      <div className="card-grid">
        <div className="card">
          <h3>Competitive Programming & DSA</h3>
          <ul className="card-list">
            <li>Solved 500+ DSA problems across LeetCode and GeeksforGeeks.</li>
            <li>Ranked among the top 1.4% of coders on LeetCode.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Technical Festivals & Events</h3>
          <ul className="card-list">
            <li>
              Contributed as a Full Stack Web Developer for Vulcanzy’23, TechKriya’24, and
              Vulcanzy’24.
            </li>
            <li>
              Helped facilitate registrations for 2,000+ students across 100+ events for
              multiple colleges.
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Certifications</h3>
          <ul className="card-list">
            <li>Completed the "Artificial Intelligence Foundation" course by Infosys Springboard.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
