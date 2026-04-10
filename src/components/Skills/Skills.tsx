import { skills } from "../../data/skills";
import "./Skills.scss";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <p className="skills__eyebrow">Skills</p>
        <h2>Technologies I Work With</h2>
        <div className="skills__list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;