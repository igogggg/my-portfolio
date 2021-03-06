import React from "react"
import styled from "styled-components"
import { useGlobalContext } from "../context/context"

const StyledHumb = styled.div`
  width: 30px;
  height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${props => props.border};
  z-index: 60;
  display: none;
  @media screen and (max-width: 765px) {
    display: flex;
    cursor: pointer;
  }
  .line {
    width: 100%;
    height: 2px;
    background-color: var(--litgh-grey);
    transition: all linear 0.25s;
  }
  &:hover .line {
    background-color: var(--green);
  }

  .line-first {
    transform: translateY(11px) rotate(45deg);
    background-color: var(--green);
  }
  .line-third {
    transform: translateY(-11px) rotate(-45deg);
    background-color: var(--green);
  }
`
const Humb = () => {
  const { Open, isSideBarOpen } = useGlobalContext()
  return (
    <StyledHumb
      border={isSideBarOpen ? "var(--green)" : "transparent"}
      onClick={Open}
    >
      <div className={`${isSideBarOpen && "line-first"} line `}></div>
      <div className={isSideBarOpen ? "" : "line"}></div>
      <div className={`${isSideBarOpen && "line-third"}  line`}></div>
    </StyledHumb>
  )
}

export default Humb
