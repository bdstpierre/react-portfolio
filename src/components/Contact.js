import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  var formData = {
    Name: '',
    Email: '',
    Message: ''
  }

  const handleInputChange = (e) => {
    let target = e.target;
    let inputType = target.name;
    let inputValue = target.value;

    if (inputType === 'Name') {
      setName(inputValue);
    } else if (inputType === 'Email') {
      setEmail(inputValue);
    } else if (inputType === 'Message') {
      setMessage(inputValue);
    }
  };

    const validateInput = (e) =>
    {
      let target = e.target;
      let inputName = target.name;
      let inputValue = target.value;

      if (!inputValue) {
        setErrorMessage(`Please enter a value in the ${inputName} field!`);
      } else {
        setErrorMessage('');
      }
    }

    const handleFormSubmit = (e) => {
      e.preventDefault();

      if (!Name || !Message) {
        setErrorMessage("Fill out all fields of the form please!");
      } else if (!validateEmail(Email)) {
        setErrorMessage("Please enter a valid email address!");
      } else {
        setErrorMessage('');
        setName('');
        setEmail('');
        setMessage('');

        formData = {
          Name: {Name},
          Email: {Email},
          Message: {Message}
        }
        console.log(formData)
      }


    };

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-title">
            <h3>{errorMessage ? errorMessage : "Fill in the form to send a message..."}</h3>
          </div>
          <div className="card-body">
            <form className="form">
              <div className="form-group row">
                <label htmlFor="fullName" className="col-sm-2 col-form-label">
                  Full Name:
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="fullName"
                    value={Name}
                    name="Name"
                    onChange={handleInputChange}
                    onBlur={validateInput}
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="emailAddress" className="col-sm-2 col-form-label">
                  Email Address:
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="emailAddress"
                    value={Email}
                    name="Email"
                    onChange={handleInputChange}
                    onBlur={validateInput}
                    type="text"
                    placeholder="name@email.com"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="messageText" className="col-sm-2 col-form-label">
                  Message:
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="messageText"
                    value={Message}
                    name="Message"
                    onChange={handleInputChange}
                    onBlur={validateInput}
                    placeholder="Enter message here..."
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn" onClick={handleFormSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;