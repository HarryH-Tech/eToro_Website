import React from "react";

import {
  StyledForm,
  StyledInput,
  StyledTextarea,
  StyledButton,
  StyledThanks,
} from "../../assets/StyledComponents/Contact";

const textareaStyles = {
  width: "100% ",
};

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <StyledForm>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/moqkabwn"
          method="POST"
        >
          <label>Name:</label>
          <StyledInput required placeholder="Name" type="text" name="name" />
          <br />

          <label>Email:</label>
          <StyledInput required placeholder="Email" type="email" name="email" />
          <br />
          <label>Message:</label>
          <br />
          <div style={textareaStyles}>
            <StyledTextarea
              required
              rows="8"
              style={textareaStyles}
              type="text"
              name="message"
              placeholder="Your Message..."
            ></StyledTextarea>
          </div>
          <br />
          {status === "SUCCESS" ? (
            <StyledThanks>
              <strong>Thanks for your question.</strong> <br />
              I'll get back to you as soon as I can.
              <br />
              Have a great day! 😊
            </StyledThanks>
          ) : (
            <StyledButton animated>
              <i className="fa fa-envelope" aria-hidden="true"></i> Send Message
            </StyledButton>
          )}
          {status === "ERROR" && (
            <p>
              Ooops! There was an error. Please ensure your email is correct and
              try again in a few minutes.
            </p>
          )}
        </form>
      </StyledForm>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    console.log(ev.target);
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
