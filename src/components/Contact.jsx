import React from "react"
import Section from "./Section"
import SectionTitel from "./SectionTitel"
import { ValidationError, useForm } from "@formspree/react"
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
const Thank = styled.div`
  margin: 0 auto;
  width: 70%;
  border: 1px solid var(--green);
  border-radius: 4px;
  padding: 16px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: var(--dark-grey);
  margin-bottom: 36px;
`

const Contact = () => {
  const [state, handleSubmit] = useForm("xnqoyapp")
  if (state.succeeded) {
    return <Thank>Thank you for your messege!</Thank>
  }
  return (
    <Section>
      <div id="contact">
        <SectionTitel>Contact</SectionTitel>

        <ContactForm name="contact" onSubmit={handleSubmit}>
          <h3>Get in touch</h3>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            name="name"
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />
          <ValidationError field="email" prefix="Email" errors={state.errors} />
          <label htmlFor="email">Your Message</label>
          <textarea
            rows="10"
            cols="45"
            name="messege"
            placeholder="Your Message"
            name="message"
            required
          />
          <SubmintBtn type="submit" disabled={state.submitting}>
            Submint
          </SubmintBtn>
        </ContactForm>
      </div>
    </Section>
  )
}

export default Contact
