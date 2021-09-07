import React from 'react';
import Work from "./Work";
import Education from "./Education";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Resume(props) {
  const { sites, work, education } = props.portfolio;

  return (
    <div className="container">
      <div id="resume" className="container-fluid" >
        <div className="text-center">
          <h2>Resume</h2>
          <h6><a href="./images/bstpierre_resume.pdf">Download the resume as a PDF</a></h6>
          <h4>Browse through my employment history</h4>
        </div>
        <div className="row">

          <Work work={work} />
          <Education education={education} />
        </div>
      </div>
    </div>
  );
}

export default Resume;