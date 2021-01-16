import React from "react"
import styled from "styled-components"

const StyledIcon = styled.div`
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
const FacebookIcon = () => {
  return (
    <StyledIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="25px"
        height="25px"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M28.71,16H32v-4c0,0-2.797-1-5.419-1C21.686,11,20,14.001,20,18.226V21h-3v5h3v13h6V26h5l1-5h-6v-3.194C26,16.455,26.772,16,28.71,16z"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M25 3A22 22 0 1 0 25 47A22 22 0 1 0 25 3Z"
        />
      </svg>
    </StyledIcon>
  )
}
export default FacebookIcon
