import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const LoadingBackground = styled.div`
  background-color: #121d2f;
  display: grid;
  place-content: center;
`
// const svgVariant = {
//   hidden: {
//     rotate: -180,
//   },
//   visible: {
//     rotate: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// }
// const pathVariants = {
//   hidden: {
//     pathLenght: 1,
//     pathOffset: 0,
//     opacity: 0,
//   },
//   visible: {
//     pathLenght: 0,
//     pathOffset: 1,
//     opacity: 1,
//     transition: {
//       duration: 5,
//       ease: "easeInOut",
//     },
//   },
// }
const Loading = () => {
  return (
    <LoadingBackground>
      <svg
        version="1.1"
        id="miLogo"
        xmlns="http://www.w3.org/2000/svg"
        width="300px"
        height="300px"
        x="0px"
        y="0px"
        viewBox="106 -106 512 512"
        enable-background="new 106 -106 512 512"
        space="preserve"
      >
        <polygon
          fill="#2a323f"
          points="106,-106 541.2,-106 618,-29.2 618,406 182.8,406 106,329.2 "
        />
        <polygon fill="#324158" points="541.2,-106 618,-29.2 541.2,-29.2 " />
        <polygon fill="#282b31" points="541.2,-29.2 618,47.6 618,-29.2 " />
        <polygon fill="#324158" points="182.8,406 106,329.2 182.8,329.2 " />
        <polygon fill="#282b31" points="259.6,406 182.8,329.2 182.8,406 " />
        <path
          fill="#0e57c5"
          stroke="#0e57c5"
          stroke-width="2.8346"
          stroke-miterlimit="10"
          d="M369.4-12.2c1.2,0.2,2.6,0.6,3.8,1l0,0l0.6,0.2
	l0.2,0.2h0.2c2,1,4,2,5.8,3.2l0,0h0.2l0.2,0.2l16.7-11.9c1.2-0.8,2.8-0.6,3.8,0.8l8.9,12.3c0.8,1.2,0.6,3-0.6,3.8L392.7,9.6
	c0.4,2,0.8,4,1,6v0.2l0,0l0.2,0.2v0.2v0.2v0.2v0.2v0.2c0,1.6,0,3.2-0.2,4.6l18.8,8.5c1.4,0.6,2,2.4,1.4,3.8l-6.2,13.7
	c-0.8,1.4-2.4,2.2-3.8,1.4l-18.5-8.3c-1.2,1.2-2.6,2.6-4.2,3.6l0,0l-0.2,0.2l0,0l-0.2,0.2l-0.6,0.4l0,0c-1.4,1-3,1.8-4.6,2.6l2,20.4
	c0.2,1.4-1,2.8-2.6,3l-15.1,1.4c-1.4,0.2-2.8-1-3-2.4l-2-20.4c-1.8-0.4-3.4-1-5-1.6h-0.2v-0.2l-0.6-0.2l-0.4-0.2h-0.2
	c-1.6-0.8-3.2-1.8-4.6-2.8L327,56.8c-1.4,1-3,0.6-4-0.6l-8.9-12.3c-0.8-1.4-0.6-3,0.6-4l16.7-11.9l-0.2-0.2l0,0
	c-0.4-1.4-0.6-2.8-0.8-4.2l0,0c0-0.4-0.2-0.6-0.2-0.8l0,0l0,0v-0.4v-0.2l0,0v-0.4l0,0v-0.2c-0.2-1.8-0.2-3.8,0-5.6l-18.8-8.5
	c-1.4-0.6-2-2.2-1.4-3.6l6.4-13.9c0.6-1.4,2.2-2,3.6-1.4l18.5,8.5c1.6-1.6,3-3,4.8-4.2h0.2v-0.2h0.2l0,0l0,0c1.6-1,3-2,4.6-2.6
	l-2-20.4c0-1.6,1-2.8,2.6-3l15.1-1.6c1.6,0,2.8,1,3,2.6L369.4-12.2z"
        />
        <path
          fill="#0e57c5"
          stroke="#0e57c5"
          stroke-width="2.8346"
          stroke-miterlimit="10"
          d="M408.6,317.7L391.3,94.6l-48.2,0.2l-34.5,211.5
	c-0.6,4.2,1,7.3,4.8,7.7l90.1,10.3C406.2,324.4,409,322.7,408.6,317.7L408.6,317.7z"
        />
      </svg>
    </LoadingBackground>
  )
}
export default Loading
