import React from 'react';

function Skills(props) {
  const skills = props.portfolio.skills;

  console.log(skills);

  return (

    <div className="container-fluid text-center">
      <h2>Skills</h2>
      <h4>What I offer</h4>
      <br />
      <div className="row">
        {skills.map((skill) => (
          <div className="col-sm-4" key={skill.id}>
          <div>
            <span className={skill.glyph}></span>
            </div>
            <h4>{skill.category}</h4>
            <ul className="list-unstyled">
              {skill.items.map((item) => (
                <li key={item.id}>
                  {item.skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
   
    </div>
  );
}

export default Skills;