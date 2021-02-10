import React from "react"
import Section from "./Section"
import styled from "styled-components"
import SectionTitel from "./SectionTitel"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useGlobalContext } from "../context/context"
import ArrowIcon from "./icons/ArrowIcon"
import { Flex } from "./Flex"

const InnerAbout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: var(--litgh-grey);
  font-size: 20px;
  font-weight: 400;
  .about-text-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    height: 100%;
  }
  .about-text {
    margin-bottom: 24px;
  }
  .about-img {
    margin-top: auto;
    border-radius: 30px;
    border: 2px solid var(--green-opacity);
    z-index: 10;
  }
  .about-img-col {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-wrap {
    position: relative;
    width: 50%;
  }
  .skill-text {
    color: var(--dark-grey);
  }
  .img-shadow {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 30px;
    border: 2px solid var(--green);
    transform: translate(25px, 25px);
    background-color: var(--green-opacity);
    &:hover {
      border: 2px solid transparent;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    .col {
      width: 100%;
    }
    .about-img-col {
      width: 100%;
    }
    .about-text-block {
      width: 100%;
    }
  }
`

const StyledSkills = styled.div`
  display: flex;
  flex-direction: space-between;
  align-items: center;
  margin: 16px 0;
  border-bottom: 1px solid var(--light-blue);
  width: 28%;
  .skill-text {
    margin: 0 3px;
  }
`
const About = () => {
  const { skills } = useGlobalContext()
  const data = useStaticQuery(graphql`
    query {
      mi: file(sourceInstanceName: { eq: "images" }, name: { eq: "Photo" }) {
        childImageSharp {
          fluid(maxWidth: 760) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="about">
      <Section>
        <SectionTitel>About</SectionTitel>
        <InnerAbout>
          <div className="about-text-block">
            <p className="about-text">
              Hello! I'm Igor, a software engineer based in Moscow.
            </p>
            <p className="about-text">
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performant
              experiences.
            </p>
            <p className="about-text">
              Here are a few technologies I've been working with recently:
            </p>
            <Flex justify="space-between" aling="center" margin="24px 0">
              {skills.map((skill, index) => (
                <StyledSkills key={index}>
                  <ArrowIcon />
                  <p className="skill-text">{skill}</p>
                </StyledSkills>
              ))}
            </Flex>
          </div>
          <div className="about-img-col ">
            <div className="img-wrap">
              <Img
                className="about-img"
                fluid={data.mi.childImageSharp.fluid}
              />
              <div className="img-shadow"></div>
            </div>
          </div>
        </InnerAbout>
      </Section>
    </div>
  )
}

export default About
