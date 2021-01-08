import React from "react"
import styled from "styled-components"

const StyledSide = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0 0;
  position: fixed;
  bottom: 0;
  width: 30px;
  min-height: 80vh;
  left: ${props => props.left};
  right: ${props => props.right};
  @media screen and (max-width: 765px) {
    display: none;
  }

  .line {
    width: 2px;
    background-color: var(--green);
    min-height: 20vh;
  }
`
const Side = ({ left, right, children }) => {
  return (
    <StyledSide left={left} right={right}>
      {children}
      <div className="line"></div>
    </StyledSide>
  )
}

export default Side
