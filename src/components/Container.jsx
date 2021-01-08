import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  width: 95vw;
  max-width: ${props => props.width};
  height: 100%;
  position: relative;
  @media screen and (max-width: 768px) {
    max-width: 768px;
    width: 95vw;
  }
`
