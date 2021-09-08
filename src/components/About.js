import React from 'react';

function About(props) {
    const about = props.portfolio.about;

  return (
    <div  className="container-fluid">
        {about.map((item) => (
            (item.id % 2)
            ?
                <div className="row" key={item.id}>
                    <div className="col-sm-8 text-sm-start">
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
            :
                <div className="row" key={item.id}>
                    <div className="col-sm-4">
                        <span className={item.glyph}></span>
                    </div>                        
                    <div className="col-sm-8 text-sm-start">
                        <h2>{item.title}</h2>
                        <h4>{item.subtitle}</h4>
                        {item.paras.map((para) => (
                            <p key={para.id}>
                                {para.text}
                            </p>
                        ))}
                    </div>
                </div>
            
            
        ))}
    </div>
  );
}

export default About;