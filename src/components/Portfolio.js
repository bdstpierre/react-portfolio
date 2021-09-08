import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio(props) {
  const sites = props.portfolio.sites;

  return (
    <div className="container-fluid text-center bg-grey" >
      <h2>Portfolio</h2>
      <h4>Samples of my work</h4>
      <div className="row text-center">
        {sites.map((site) => (
          <div className="col-sm-4" key={site.id}>
            <div className="card">
              <img src={`./images/${site.thumbnail}`} alt="Site thumbnail" className="card-img-top"></img>
              <div className="card-body">
              <h5 className="card-title">{site.name}</h5>
              <p className="card-text">{site.description}</p>              
              <a className="btn" href={site.deployed}>Visit the site</a>
              <br />
              <a className="btn" href={site.github}>View the code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;