import React from "react"
import { Flex } from "./Flex"
import Section from "./Section"
import styled from "styled-components"
import { useGlobalContext } from "../context/context"
import Side from "./Side"
import { Link } from "react-scroll"
import Fade from "react-reveal/Fade"

const TopTitel = styled.p`
  color: var(--green);
  font-size: 16px;
  font-weight: 400;
  margin-top: 130px;
`
const Titel = styled.h1`
  color: var(--litgh-grey);
  font-size: clamp(40px, 6vw, 80px);
  margin-bottom: 16px;
`
const Email = styled.a`
  writing-mode: vertical-rl;
  color: var(--litgh-grey);
  margin: 10px auto;
  font-size: 14px;
  &:hover {
    color: var(--green);
    cursor: pointer;
  }
`
const SubTitel = styled.p`
  color: var(--dark-grey);
  font-size: clamp(12px 5vw 20px);
  font-weight: 400;
  width: 60vw;
  margin-bottom: 80px;
`
const Button = styled.button`
  padding: 25px 30px;
  border: 1px solid var(--green);
  border-radius: 4px;
  color: var(--green);
  background-color: transparent;
  font-size: max(16px, 20px);
  font-weight: 400;
  transition: all linear 0.25s;
  &:hover {
    background-color: rgb(100 255 218 / 10%);
  }
`
const BottomTitel = styled.h2`
  color: var(--litgh-grey);
  font-size: clamp(24px, 6vw, 60px);
  margin-bottom: 32px;
`

const Hero = () => {
  const { social } = useGlobalContext()
  return (
    <Section>
      <Side left="3vw">
        {social.map(({ icon, url }, index) => (
          <a href={url} key={index} target="_blank">
            {icon}
          </a>
        ))}
      </Side>
      <Side right="3vw">
        <Email href="mailto:igogggg@gmail.com">igogggg@gmail.com</Email>
      </Side>

      <Fade left cascasde>
        <div>
          <TopTitel>Hi,my name is</TopTitel>
          <Titel>Igor Goncharenko.</Titel>
        </div>
        <BottomTitel> Frontend Developer</BottomTitel>
        <SubTitel>
          I'm a software engineer based in Moscow, MA specializing in building
          exceptional websites and applications.
        </SubTitel>
        <Link to="contact">
          <Button>Get In Touch</Button>
        </Link>
      </Fade>
    </Section>
  )
}

export default Hero
