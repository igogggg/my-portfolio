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
export const TelegramIcon = ({ link }) => {
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
          d="M43.361,7.242	C42.077,7.758,5.633,23.389,5.633,23.389s-1.765,0.614-1.625,1.748s1.58,1.653,1.58,1.653l9.38,3.212c0,0,2.832,9.448,3.39,11.241	c0.558,1.796,1.004,1.838,1.004,1.838c0.518,0.23,0.992-0.137,0.992-0.137l6.061-5.622l9.448,7.369	c2.554,1.134,3.483-1.228,3.483-1.228l6.509-33.925C46.431,6.913,44.717,6.699,43.361,7.242z"
        />
        <polyline
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          points="15,30 39,14 22,34"
        />
        <polyline
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          points="20,43 22,34 26,37"
        />
      </svg>
    </StyledIcon>
  )
}
