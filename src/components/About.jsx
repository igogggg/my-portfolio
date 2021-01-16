import React from "react"
import { Container } from "./Container"
import { Flex } from "./Flex"
import styled from "styled-components"
import SectionTitel from "./SectionTitel"

const About = () => {
  return (
    <Container width="70vw">
      <SectionTitel>About</SectionTitel>
      <Flex></Flex>
    </Container>
  )
}

export default About
