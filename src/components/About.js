import React from 'react';

function About(props) {
    const about = props.portfolio.about;

  return (
    <div className="container">
          <div id="about" className="container-fluid">
        <div className="row">
            {about.map((item) => (
                <div key={item.id}>
                    <div className="col-sm-8 text-left">
                        <h2>{item.title}</h2>
                        <h4>{item.subtitle}</h4>
                        {item.paras.map((para) => (
                            <p key={para.id}>
                                {para.text}
                            </p>
                        ))}
                    </div>
                    <div className="col-sm-4">
                        <span className={item.glyph}></span>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </div>
  );
}

export default About;