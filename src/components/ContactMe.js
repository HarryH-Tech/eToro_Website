import React from "react";

import {
  StyledForm,
  StyledInput,
  StyledTextarea,
  StyledButton,
  StyledThanks,
  StyledFooter,
  StyledLabel,
} from "../assets/styles/ContactMe";

const textareaStyles = {
  width: "80% ",
  margin: "auto",
};

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.handleHover = this.handleHover.bind(this);

    this.state = {
      status: "",
      isHovered: false,
    };
  }

  handleHover() {
    this.setState((prevState) => ({
      isHovered: !prevState.isHovered,
    }));
  }

  render() {
    const btnClass = this.state.isHovered
      ? "fa fa-paper-plane"
      : "fa fa-envelope";

    const { status } = this.state;

    return (
      <>
        <br />
        <hr style={{ padding: "0", margin: "0" }} />

        <div>
          <div style={{ textAlign: "center" }}>
            <h1>Contact Me</h1>
          </div>
          <StyledForm id="contact_me">
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/moqkabwn"
              method="POST"
            >
              <StyledLabel htmlFor="name">Name:</StyledLabel>

              <StyledInput
                required
                placeholder="Name"
                type="text"
                name="name"
              />
              <br />

              <StyledLabel htmlFor="email">Email:</StyledLabel>
              <StyledInput
                required
                placeholder="Email"
                type="email"
                name="email"
              />
              <br />
              <StyledLabel>Message</StyledLabel>
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
                <StyledButton
                  animated
                  onMouseEnter={this.handleHover}
                  onMouseLeave={this.handleHover}
                >
                  <i className={btnClass} aria-hidden="true"></i> Send Message
                </StyledButton>
              )}
              {status === "ERROR" && (
                <p>
                  Ooops! There was an error. Please ensure your email is correct
                  and try again in a few minutes.
                </p>
              )}
            </form>
          </StyledForm>

          <StyledFooter />
        </div>
      </>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
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
