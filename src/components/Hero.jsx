import React from "react"
import { Flex } from "./Flex"
import { Container } from "./Container"
import styled from "styled-components"
import { useGlobalContext } from "../context/context"
import Side from "./Side"
import { Link } from "react-scroll"
import Fade from "react-reveal/Fade"

const TopTitel = styled.p`
  color: var(--green);
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 5px 5px;
`
const Titel = styled.h1`
  color: var(--litgh-grey);
  font-size: clamp(40px, 8vw, 80px);
  margin-bottom: 30px;
`
const Email = styled.a`
  writing-mode: vertical-rl;
  color: var(--litgh-grey);
  margin: 15px auto;
  font-size: 14px;
  &:hover {
    color: var(--green);
    cursor: pointer;
  }
`
const SubTitel = styled.p`
  color: var(--dark-grey);
  font-size: 18px;
  font-weight: 400;
  width: 70%;
  margin-bottom: 30px;
`
const Button = styled.button`
  padding: 25px 30px;
  border: 1px solid var(--green);
  border-radius: 4px;
  color: var(--green);
  background-color: transparent;
  font-size: max(14px, 18px);
  font-weight: 400;
  transition: all linear 0.25s;
  &:hover {
    background-color: rgb(100 255 218 / 10%);
  }
`
const Hero = () => {
  const { social } = useGlobalContext()
  return (
    <Container width="70vw">
      <Side left="3vw">
        {social.map(({ icon, url }, index) => (
          <a href={url} key={index}>
            {icon}
          </a>
        ))}
      </Side>
      <Side right="3vw">
        <Email href="mailto:igogggg@gmail.com">igogggg@gmail.com</Email>
      </Side>

      <Flex
        as="section"
        id="/"
        padding="80px 0"
        height="100vh"
        justify="center"
        aling="flex-start"
        direction="column"
      >
        <Fade left cascasde>
          <TopTitel>Hi,my name is</TopTitel>
          <Titel>Igor Goncharenko.</Titel>
          <Titel> Things for the web.</Titel>
          <SubTitel>
            I'm a software engineer based in Moscow, MA specializing in building
            exceptional websites and applications.
          </SubTitel>
          <Link to="/contact">
            <Button>Get In Touch</Button>
          </Link>
        </Fade>
      </Flex>
    </Container>
  )
}

export default Hero
