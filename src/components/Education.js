import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Education(props) {
    const education = props.education;

    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="panel panel-default text-center">
                    <div className="row text-center">
                        {education.map((item) => (
                        <div key={item.id}>
                           <div className="panel-heading">
                                <h1>{item.degree}</h1>
                                <h4>{item.institution}</h4>
                            </div>
                            <div className="panel-body">
                                <p>
                                    {item.description}
                                </p>
                            </div>
                            <div className="panel-footer">
                                <h3>{item.dates}</h3>
                            </div>
                        </div>
                        ))} 
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Education;