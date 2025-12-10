import React from "react";

const skillGroups = [
  {
    title: "Languages",
    items: ["C++", "JavaScript", "Java", "C", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["ReactJS", "React Native", "Redux", "NodeJS", "ExpressJS", "Tailwind CSS"],
  },
  {
    title: "Databases & Tools",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Prisma", "REST APIs", "Git", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">Technologies I work with on a daily basis</p>

      {skillGroups.map((group) => (
        <div key={group.title} style={{ marginBottom: "14px" }}>
          <h3 style={{ fontSize: "0.9rem", color: "#9ca3af", marginBottom: "6px" }}>
            {group.title}
          </h3>
          <div className="skills-grid">
            {group.items.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
