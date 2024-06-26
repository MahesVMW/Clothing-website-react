// ContactUs.js

import React from 'react';

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("https://formspree.io/f/xvoedrpj", {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Success');
      } else {
        response.json().then(data => {
          if (data.errors) {
            alert('Error: ' + data.errors.map(error => error.message).join(', '));
          } else {
            alert('Error submitting form');
          }
        });
      }
    }).catch(error => {
      alert('Network error: ' + error.message);
    });
    event.target.reset();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <h1 className="text-center mt-4">Contact Us</h1>
            <div className="card-body">
              <form onSubmit={handleSubmit} id="contact-form">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Leave a Message</label>
                  <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
