import React from "react"
import { Link } from "react-scroll"
import { Container } from "./Container"
import { Flex } from "./Flex"
import MiIcon from "./icons/MiIcon"
import styled from "styled-components"
import { useScroll } from "ahooks"
import Humb from "./Humb"
import { useGlobalContext } from "../context/context"
import Fade from "react-reveal/Fade"

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 30;
  opacity: ${props => props.opacity};
  transition: opacity linear 0.3s;
  .link-item {
    padding: 10px 2px;
    color: var(--litgh-grey);
    font-size: 16px;
    font-family: "Fira Code";
    font-weight: 500;
    transition: all linear 0.25s;
  }
  .nav-link:hover > .link-item {
    color: var(--green);
    cursor: pointer;
  }
  .underline {
    height: 2px;
    display: block;
    width: 0;
    transition: all linear 0.25s;
  }
  .nav-link:hover > .underline {
    background-color: #48ddea;
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    nav {
      width: 70%;
    }
  }
  @media screen and (max-width: 765px) {
    nav {
      display: none;
    }
  }
`

const Header = () => {
  const { links, Open } = useGlobalContext()
  const { top } = useScroll(document)
  return (
    <StyledHeader opacity={top > 70 ? 0 : 1}>
      <Container>
        <Flex justify="space-between" aling="center" height="80px">
          <MiIcon />
          <Flex aling="center" as="nav" justify="space-between" width="50%">
            {links.map((link, index) => (
              <Fade right top>
                <div key={index} className="nav-link">
                  <Link to={link.path} className="link-item">
                    {link.text}
                  </Link>
                  <span className="underline"></span>
                </div>
              </Fade>
            ))}
          </Flex>
          <Humb />
        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header
