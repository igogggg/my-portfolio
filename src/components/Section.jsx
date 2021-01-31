import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100vh;
  padding: 80px 25px 25px;
  @media screen and (max-width: 768px) {
    max-width: 768px;
    padding: 50px 20px;
  }
`

function Section({ children }) {
  return <StyledSection>{children}</StyledSection>
}

export default Section
