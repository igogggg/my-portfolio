import React from "react"
import Section from "./Section"
import SectionTitel from "./SectionTitel"
import { useStaticQuery, graphql } from "gatsby"
import GitIcon from "./icons/GitIcon"
import ExternalLink from "./icons/ExternalLink"
import CodepenIcon from "./icons/CodepenIcon"
import Img from "gatsby-image"
import { Flex } from "./Flex"
import styled from "styled-components"
import { useGlobalContext } from "../context/context"

const StyledCard = styled.div`
  width: 49%;
  margin: 1% 0;
  border: 1px solid var(--light-blue);

  .project-img {
    position: relative;
    width: 100%;
  }
  .work-shadow {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--blue-shadow);
    transition: all linear 0.25s;
    &:hover {
      background-color: transparent;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
const ProjectBtn = styled.a`
  display: block;
  max-width: 210px;
  padding: 25px 30px;
  border: 1px solid var(--green);
  border-radius: 4px;
  color: var(--green);
  background-color: transparent;
  font-size: max(16px, 20px);
  font-weight: 400;
  margin: 48px auto;
  transition: all linear 0.25s;
  &:hover {
    background-color: rgb(100 255 218 / 10%);
  }
`
const Projects = () => {
  const { projects } = useGlobalContext()

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div id="projects">
      <Section>
        <SectionTitel>Project</SectionTitel>
        <Flex justify="space-between" height="100vh">
          {projects.map(({ url, git, tech }, i) => {
            const img = data.allFile.edges[i]
            return (
              <StyledCard key={i}>
                <div className="project-img">
                  <Img fluid={img.node.childImageSharp.fluid} />
                  <div className="work-shadow"></div>
                </div>
                <Flex
                  justify="space-between"
                  aling="center"
                  width="100%"
                  padding="5px 16px"
                >
                  <p>{tech}</p>
                  <Flex justify="space-between" aling="center">
                    <a href={url}>
                      <ExternalLink />
                    </a>
                    <a href={git}>
                      <GitIcon />
                    </a>
                  </Flex>
                </Flex>
              </StyledCard>
            )
          })}
        </Flex>
        <ProjectBtn
          href="https://codepen.io/igogggg/pens/public"
          target="_blank"
        >
          <Flex justify="space-between" width="100%" aling="center">
            <span>View More</span>
            <CodepenIcon color="var(--green)" />
          </Flex>
        </ProjectBtn>
      </Section>
    </div>
  )
}

export default Projects
