import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  .img-filter {
    filter: brightness(0.5);
    cursor: pointer;
    transition: all linear 0.25s;
    &:hover {
      filter: brightness(1);
      transform: scale(1.05);
      z-index: 50;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const CertificateImgFreecode = () => {
  const freedata = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "freecode" } }) {
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

  const freeimgs = freedata.allFile.edges

  return (
    <ImgWrap>
      {freeimgs.map((img,i) => (
        <Img key={i} className="img-filter" fluid={img.node.childImageSharp.fluid} />
      ))}
    </ImgWrap>
  )
}

export default CertificateImgFreecode
