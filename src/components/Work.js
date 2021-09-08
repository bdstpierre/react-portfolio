import React from 'react';

function Work(props) {
    const work = props.work;

    return (
        <>
            {work.map((item) => (
                <div className="col-sm-12" key={item.id}>
                    <div className="card">
                            <div className="card-header">
                                <h1>{item.company}</h1>
                                <h4>{item.address}</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    {item.tasks.map((task) => (
                                        <li className="list-group-item" key={task.task_id}>
                                            {task.task_description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="card-footer">
                                <h3>{item.title}</h3>
                                <h4>{item.dates}</h4>
                            </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Work;