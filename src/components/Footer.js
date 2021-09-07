import React from 'react';

function Footer(props) {
    const contacts = props.portfolio.footer;

    return (
        <div className="row">
            {contacts.map((contact) => (
                <div className="col-sm-4" key={contact.id}>
                    {contact.glyph 
                        ? <span className={contact.glyph}></span>
                        : <span style={{display: "inline-block"}}>
                            <img className="icon" src={contact.img}></img>
                        </span>
                    }
                    <a href={contact.href}>{contact.value}</a>
                </div>
            ))}
        </div>
    );
}

export default Footer;