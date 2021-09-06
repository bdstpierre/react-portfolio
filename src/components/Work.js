import React from 'react';

function Work(props) {
    const work = props.work;

    return (
        <>
            {work.map((item) => (
                <div className="col-sm-12" key={item.id}>
                    <div className="panel panel-default text-center">
                            <div className="panel-heading">
                                <h1>{item.company}</h1>
                                <h4>{item.address}</h4>
                            </div>
                            <div className="panel-body">
                                <ul className="styled-list">
                                    {item.tasks.map((task) => (
                                        <li key={task.task_id}>
                                            {task.task_description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="panel-footer">
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