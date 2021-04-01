import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 1250px;
  padding: 10px 20px;
  @media screen and (max-width: 768px) {
    max-width: 768px;
    padding: 10px 16px;
  }
`

function Section({ children }) {
  return <StyledSection>{children}</StyledSection>
}

export default Section
