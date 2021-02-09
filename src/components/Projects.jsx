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

const ProjectInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const StyledCard = styled.div`
  border: 1px solid var(--light-blue);
  border-radius: 0 0 4px 4px;

  .project-img {
    width: 100%;
    filter: brightness(0.5);
    cursor: pointer;
    transition: all linear 0.25s;
    &:hover {
      filter: brightness(1);
      transform: scale(1.05) translateY(-10px);
      z-index: 50;
    }
  }
`
const ProjectBtn = styled.a`
  display: block;
  max-width: 190px;
  padding: 18px 25px;
  border: 1px solid var(--green);
  border-radius: 4px;
  color: var(--green);
  background-color: transparent;
  font-size: max(16px, 20px);
  font-weight: 400;
  margin: 24px auto;
  cursor: pointer;
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
        <ProjectInner>
          {projects.map(({ url, git, tech }, i) => {
            const img = data.allFile.edges[i]
            return (
              <StyledCard key={i}>
                <div className="project-img">
                  <Img fluid={img.node.childImageSharp.fluid} />
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
        </ProjectInner>
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
