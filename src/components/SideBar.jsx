import React from "react"
import styled from "styled-components"
import { Flex } from "./Flex"
import { useGlobalContext } from "../context/context"
import { Link } from "react-scroll"

const StyledSideBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.9;
  z-index: 10;
  transition: all linear 0.3s;
  color: var(--litgh-grey);
  font-size: 26px;
  font-weight: 500;
  transform: ${props => props.transform};
  .side-link {
    display: block;
    width: 100%;
    text-align: center;
    padding: 15px 0;
  }
  .side-link:hover {
    cursor: pointer;
    color: var(--green);
    background-color: #1d1b1b;
  }
`

const SideBar = () => {
  const { links, Open, isSideBarOpen } = useGlobalContext()
  return (
    <StyledSideBar
      transform={isSideBarOpen ? "translateX(0)" : "translateX(100%)"}
    >
      <Flex
        direction="column"
        padding="150px 0"
        aling="center"
        justify="space-between"
        height="100%"
        width="100%"
      >
        {links.map((link, index) => (
          <Link onClick={Open} className="side-link" to={link.path} key={index}>
            {link.text}
          </Link>
        ))}
      </Flex>
    </StyledSideBar>
  )
}

export default SideBar