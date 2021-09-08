import React from 'react';

function Footer(props) {
    const contacts = props.portfolio.footer;
console.log(contacts);
    return (
        <div className="row footer">
        <ul className="list-group list-group-horizontal-sm contact align-items-center">
            {contacts.map((contact) => (
                <li className="list-group-item flex-fill d-flex" key={contact.id}>
                
                        
                    <a className="list-group-item list-group-item-action" href={contact.href}><span style={{display: "inline-block"}}>
                        <img className="icon" src={contact.img}></img>
                    </span> {contact.value}</a>
                    
                </li>
            ))}
        </ul>
        </div>
    );
}

export default Footer;