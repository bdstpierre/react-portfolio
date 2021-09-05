import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio(props) {
  const message = 'This is the Portfolio Component';
  const websites = props.portfolio;

  return (
    <div id="portfolio" className="container-fluid text-center bg-grey" >
      <h2>Portfolio</h2>
      <h4>Samples of my work</h4>
      <div className="row text-center">
        {websites.map((site) => (
          <div className="col-sm-4">
            <div className="thumbnail" key={site.id}>
              <h3>{site.name}</h3>
              <p>{site.description}</p>
              <img src={`./images/${site.thumbnail}`} alt="Site thumbnail"></img>
              <a href={site.deployed}>Visit the site</a>
              <br />
              <a href={site.github}>View the code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;