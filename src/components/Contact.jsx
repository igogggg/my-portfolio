import React from "react"
import Section from "./Section"
import SectionTitel from "./SectionTitel"
import styled from "styled-components"

const ContactForm = styled.form`
  width: 60%;
  margin: 16px auto;
  border: 1px solid var(--light-blue);
  padding: 25px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  input,
  textarea {
    margin-bottom: 16px;
    border: 1px solid var(--light-blue);
    border-radius: 3px;
  }
  h3 {
    margin-bottom: 24px;
    text-align: center;
  }
  label {
    color: var(--dark-grey);
    font-size: 24px;
  }
`
const SubmintBtn = styled.button`
  display: block;
  max-width: 190px;
  padding: 18px 25px;
  border: 1px solid var(--green);
  border-radius: 4px;
  color: var(--green);
  background-color: transparent;
  font-size: max(16px, 20px);
  font-weight: 400;
  margin: 24px auto;
  cursor: pointer;
  transition: all linear 0.25s;
  &:hover {
    background-color: rgb(100 255 218 / 10%);
  }
`
const Contact = () => {
  const [state, setState] = React.useState({
    username: "",
    email: "",
    message: "",
  })

  const updateField = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <Section>
      <div id="contact">
        <SectionTitel>Contact</SectionTitel>
        <ContactForm
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={updateField} />
            </label>
          </p>
          <h3>Get in touch</h3>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            name="username"
            value={state.username}
            onChange={updateField}
          />
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            name="email"
            value={state.email}
            onChange={updateField}
          />
          <label htmlFor="email">Your Message</label>
          <textarea
            rows="10"
            cols="45"
            name="text"
            placeholder="Your Message"
            name="message"
            value={state.message}
            onChange={updateField}
          />
          <SubmintBtn type="submit">Submint</SubmintBtn>
        </ContactForm>
      </div>
    </Section>
  )
}

export default Contact
