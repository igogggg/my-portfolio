import React from "react"
import { Flex } from "./Flex"
import { Container } from "./Container"
import styled from "styled-components"
import { TelegramIcon } from "./icons/TelegramIcon"
import { InstagramIcon } from "./icons/InstagramIcon"
import { GitIcon } from "./icons/GitIcon"
import { FacebookIcon } from "./icons/FacebookIcon"
import { CodepenIcon } from "./icons/CodepenIcon"
import Side from "./Side"

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
  width: 50%;
`
const Hero = () => {
  return (
    <Container width="70vw">
      <Side left="3vw">
        <TelegramIcon />
        <InstagramIcon />
        <GitIcon />
        <FacebookIcon />
        <CodepenIcon />
      </Side>
      <Side right="3vw">
        <Email href="mailto:igogggg@gmail.com">igogggg@gmail.com</Email>
      </Side>

      <Flex
        as="section"
        id="/"
        padding="150px 0"
        height="100vh"
        justify="center"
        aling="flex-start"
        direction="column"
      >
        <TopTitel>Hi,my name is</TopTitel>
        <Titel>Igor Goncharenko.</Titel>
        <Titel> Things for the web.</Titel>
        <SubTitel>
          I'm a software engineer based in Moscow, MA specializing in building
          exceptional websites and applications.
        </SubTitel>
      </Flex>
    </Container>
  )
}

export default Hero
