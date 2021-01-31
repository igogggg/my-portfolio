import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? "column" : "row")};
  justify-content: ${props => props.justify};
  align-items: ${props => props.aling};
  width: ${props => props.width};
  min-height: ${props => props.height};
  padding: ${props => props.padding};
  flex-wrap: wrap;
  margin: ${props => props.margin};
`
