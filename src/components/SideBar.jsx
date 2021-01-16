import React from "react"
import styled from "styled-components"
import { Flex } from "./Flex"
import { useGlobalContext } from "../context/context"
import { Link } from "react-scroll"
import Fade from "react-reveal/Fade"

const StyledSideBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
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
  const { links, Open, isSideBarOpen, social } = useGlobalContext()
  return (
    <StyledSideBar
      transform={isSideBarOpen ? "translateX(0)" : "translateX(100%)"}
    >
      {isSideBarOpen && (
        <Flex
          direction="column"
          padding="80px 0"
          aling="center"
          justify="space-between"
          height="100%"
          width="100%"
        >
          {links.map((link, index) => (
            <Fade right cascade duration={1500}>
              <Link
                onClick={Open}
                className="side-link"
                to={link.path}
                key={index}
              >
                {link.text}
              </Link>
            </Fade>
          ))}
          <Flex justify="space-between" width="100%" padding="50px">
            {social.map(({ icon, url }, index) => (
              <Fade
                key={index}
                distance="150px"
                bottom
                duration={`${index * 4}00`}
              >
                <a href={url}>{icon}</a>
              </Fade>
            ))}
          </Flex>
        </Flex>
      )}
    </StyledSideBar>
  )
}

export default SideBar
