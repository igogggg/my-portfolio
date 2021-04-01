import React from "react"
import styled from "styled-components"

const StyledTitel = styled.h2`
  color: var(--litgh-grey);
  font-size: clamp(26px, 5vw, 32px);
  text-align: left;
  position: relative;
  font-weight: 600;
  white-space: nowrap;
  margin-left: 20px;
  margin-bottom: 80px;
  ::after {
    content: "";
    width: 200px;
    height: 1px;
    background-color: var(--light-blue);
    position: absolute;
    top: 55%;
    left: 150px;
  }
  @media screen and (max-width: 768px) {
    ::after {
      width: 100px;
      left: 120px;
    }
  }
`
const SectionTitel = ({ children }) => {
  return <StyledTitel>{children}</StyledTitel>
}

export default SectionTitel
