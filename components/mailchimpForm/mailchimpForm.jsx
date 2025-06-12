import addToMailchimp from 'gatsby-plugin-mailchimp';
import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-bootstrap';

// Based on: https://github.com/benjaminhoffman/gatsby-plugin-mailchimp/blob/master/examples/src/pages/index.js
const MailchimpForm = ({ submitText, confirmationMessage }) => {
  const [state, setState] = React.useState({
    email: null,
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const postSubmit = () => {
    setSubmitted(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log('submit', state);

    addToMailchimp(state.email, state)
      .then(({ msg, result }) => {
        console.log('msg', `${result}: ${msg}`);
        if (result !== 'success') {
          throw msg;
        }
        postSubmit();
      })
      .catch((err) => {
        console.log('err', err);
        alert(err);
      });
  };

  return (
    <Form name="Newsletter Form" onSubmit={handleSubmit}>
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

      <div>
        {!submitted && (
          <button type="submit" className="btn btn-lg">
            {submitText}
          </button>
        )}

        {submitted && <h2 className="text-center">{confirmationMessage}</h2>}
      </div>
    </Form>
  );
};

MailchimpForm.propTypes = {
  submitText: PropTypes.string.isRequired,
  confirmationMessage: PropTypes.string.isRequired,
};

export default MailchimpForm;
