import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-bootstrap';

// Based on: https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
const NetlifyForm = ({ submitText, confirmationMessage }) => {
  const [state, setState] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const postSubmit = () => {
    setSubmitted(true);
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then()
      .catch((error) => alert(error));
    postSubmit();
  };

  return (
    <Form
      name="Contact Form"
      method="post"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          placeholder="Message"
          required
          onChange={handleChange}
        />
      </Form.Group>

      <div>
        {!submitted && (
          <button type="submit" className="btn btn-lg">
            {submitText}
          </button>
        )}

        {submitted && <h2 className="text-center">{confirmationMessage}</h2>}
      </div>

      {/* Need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="form-name" value="Contact Form" />
    </Form>
  );
};

NetlifyForm.propTypes = {
  submitText: PropTypes.string.isRequired,
  confirmationMessage: PropTypes.string.isRequired,
};

export default NetlifyForm;
