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

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [inputData, setInputData] = React.useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setInputData(prevInputData => ({ ...prevInputData, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...inputData,
      }),
    })
      .then(res => {
        console.log("form res ", res)
        setOpenForm(false)
        setSuccessMessage(true)
      })
      .catch(error => alert(error))
  }

  return (
    <Section>
      <div id="contact">
        <SectionTitel>Contact</SectionTitel>
        <ContactForm
          name="contact"
          method="post"
          onSubmit={handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <h3>Get in touch</h3>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            name="name"
            value={inputData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            name="email"
            value={inputData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Your Message</label>
          <textarea
            rows="10"
            cols="45"
            name="text"
            placeholder="Your Message"
            name="message"
            value={inputData.message}
            onChange={handleChange}
            required
          />
          <SubmintBtn type="submit">Submint</SubmintBtn>
        </ContactForm>
      </div>
    </Section>
  )
}

export default Contact
