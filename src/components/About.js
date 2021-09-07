import React from 'react';

function About() {

  return (
    <div className="container">
          <div id="about" className="container-fluid">
        <div className="row">
            <div className="col-sm-8 text-left">
                <h2>About Barry St. Pierre</h2>
                <h4>Over 35 years of engineering excellence</h4>
                <p>
                    I have worked in the engineering field for over 35 years covering testing, computer analysis, design, and homologation.  I have worked for the Navy on structural acoustics, I have worked on active noise control, and I have worked in transportation from heavy trucks, light trucks, passenger vehicles and electric scooters.
                </p>
                <p>
                    Throughout my career I have used programming to help me get my work done.  This has included writing scripts to process data using MATLAB or Python, writing UNIX scripts to process text files to extract data, and using PHP to create websites for sharing information and organizing groups of people.
                </p>
            </div>
            <div className="col-sm-4">
                <span className="glyphicon glyphicon-cog logo"></span>
            </div>
        </div>
    </div>
    </div>
  );
}

export default About;