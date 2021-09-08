import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Education(props) {
    // This may need to be:
    // const education = props.portfolio.education;
    const education = props.education;

    return (
        <>
            {education.map((item) => (
                <div className="col-sm-12" key={item.id}>
                    <div className="card">
                        <div className="card-header">
                            <h1>{item.degree}</h1>
                            <h4>{item.institution}</h4>
                        </div>
                        <div className="card-body">
                            <p>
                                {item.description}
                            </p>
                        </div>
                        <div className="card-footer">
                            <h3>{item.dates}</h3>
                        </div>
                    </div>
                </div>
            ))} 
        </>
    );
}

export default Education;