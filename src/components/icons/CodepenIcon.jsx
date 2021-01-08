import React from "react"
import styled from "styled-components"

const StyledIcon = styled.a`
  svg {
    stroke: var(--litgh-grey);
    &:hover,
    &:active {
      stroke: var(--green);
      transform: translateX(3px);
      transition: all linear.25s;
    }
  }
`
export const CodepenIcon = ({ link }) => {
  return (
    <StyledIcon href={link}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="25px"
        height="25px"
      >
        <path
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M25,4L4,17.345v15.309L25,46l21-13.345V17.345L25,4z M25,29.182l-5.932-4.113L25,21.025l5.932,4.044L25,29.182z M27,17.606V9.95l13.43,8.534l-6.019,4.173L27,17.606z M23,17.606l-7.411,5.052L9.57,18.485L23,9.95V17.606z M12.092,25.042L8,27.831v-5.627L12.092,25.042z M15.57,27.453L23,32.604v7.446L9.591,31.529L15.57,27.453z M27,32.604l7.43-5.151l5.979,4.076L27,40.05V32.604z M37.908,25.042L42,22.205v5.627L37.908,25.042z"
        />
      </svg>
    </StyledIcon>
  )
}
