import React from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"

const strokeAnim = keyframes`
from{
            stroke-dasharray:1120;
            stroke-dashoffset:1120;
            
        }
        to{
           stroke-dashoffset:0; 
            
        }
`
const textAnim = keyframes`
from{
          fill-opacity:.3;
            transform: scale(0)
        }
        to{
           fill-opacity:1;
            transform: scale(1)
        };
`
const logoAnim = keyframes`
0%{
  transform:rotateX(0) scale(1)
}
70%{
  transform:rotateX(0) scale(1)
}
100%{
  transform:rotateX(90deg) scale(.3)
};
`
const LoadingBackground = styled.div`
  background-color: var(--blue-black);
  min-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  place-content: center;
  .logo-stroke {
    stroke-dasharray: 1120;
    stroke-dashoffset: 1120;
    animation: ${strokeAnim} linear 2.5s forwards;
  }
  .logotext {
    transform-origin: 50% 50% 0;
    animation: ${textAnim} linear 2.5s forwards;
  }
  .logo {
    animation: ${logoAnim} linear 4.5s forwards;
  }
`

const Loading = () => {
  return (
    <LoadingBackground>
      <svg
        className="logo"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        x="0px"
        y="0px"
        viewBox="0 0 300 300"
        enableBackground="new 0 0 300 300"
        space="preserve"
      >
        <path
          className="logo-stroke"
          fill="none"
          stroke="#48ddea"
          strokeWidth="7.7991"
          strokeMiterlimit="10"
          d="M271.6,5H28.4C15.5,5,5,15.5,5,28.4v243.2
	C5,284.5,15.5,295,28.4,295h243.2c12.9,0,23.4-10.5,23.4-23.4V28.4C295,15.5,284.5,5,271.6,5z"
        />
        <path
          className="logotext"
          fill="#48ddea"
          d="M239.4,60.8l2.5,4.4L192,101.5c9.8,0,19.8,2.4,29.9,7.3c10.2,4.8,17.9,11.6,23.1,20.1
		c5.2,8.6,7.8,17.6,7.8,27c0,15-5.3,29.3-15.8,43.2s-25.5,25.2-45,34.2c-19.5,9-37.8,13.4-55,13.4c-16.5,0-31.6-3.6-45.2-10.9
		c-13.6-7.3-23.7-16.3-30.2-27.3c-6.5-10.9-9.8-23-9.8-36.1c0-14.8,3.6-28.5,10.9-41.2c7.3-12.7,20.8-26.8,40.6-42.2l55.3-43.1
		c15.4,7.3,27.4,12.2,36.1,14.6c8.7,2.4,17.2,3.6,25.5,3.6C226.6,64.1,233,63,239.4,60.8z M107,93.8c-10.5,10.6-17.8,20.5-22.1,29.8
		c-4.2,9.3-6.4,20.1-6.4,32.5c0,9.9,1.4,18.7,4.2,26.3c2.8,7.6,6.9,15,12.4,22c5.2-4.7,8.5-8.6,9.8-11.8s2.1-9.2,2.1-18V93.8z
		 M153.4,132.1c-7.3,3.4-13.3,6.9-18,10.4v22.6c0,6.9-0.5,11.5-1.5,13.9c-1,2.4-3.1,4.9-6.4,7.5c-2,1.5-3.6,2.8-4.9,3.8l-23.5,19.4
		c8.2,8.5,16.5,14.8,25,18.8s18.3,6.4,29.4,7V132.1z M137.7,69.1l-2.3,2.3v63.5l64-47.3C179.4,82.7,158.9,76.5,137.7,69.1z
		 M159.5,161.8c6.4,4.3,12.2,7.3,17.5,9.1c5.3,1.8,11.1,2.7,17.5,2.7c5.8,0,11.2-0.7,16.1-2.1c4.9-1.4,11.2-4.3,18.7-8.5
		c-2.3-9.4-6.5-17-12.6-22.8c-9.9-9.5-22.3-14.2-37.2-14.2c-6.3,0-13,1.2-20.1,3.6V161.8z M159.5,199.1c11.4-6,22.2-9,32.4-9
		c9.8,0,20.3,2.7,31.3,8.2c4.6-9.5,7-18.5,7-27.1v-1.7c-8.2,4.1-14.8,6.8-19.8,8.2c-5,1.4-10.5,2-16.4,2c-5.7,0-11.3-0.9-17.1-2.6
		c-5.7-1.7-11.5-4.3-17.4-7.6V199.1z M159.5,235.4c8.5-0.4,15.4-1.6,20.8-3.5c8.2-2.8,15.9-6.8,23.2-12.1c5.5-3.9,11-9.4,16.7-16.4
		c-11-4.5-20.8-6.7-29.3-6.7c-10.3,0-20.8,3-31.4,8.9V235.4z"
        />
      </svg>
    </LoadingBackground>
  )
}
export default Loading
