import styled, {keyframes} from 'styled-components'

export const Main = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(red,blue);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: -90px;
  background-size:100% 100%;
  /*https://ik.imagekit.io/sdce03tuc/5532.jpg_wh1200.jpg*/ 
  background-repeat:no-repeat;
  gap: 30px;
`

export const Heading = styled.h1`
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-align:center;
  color: #ffffff;
  text-shadow: 0 0 10px red, 0px 0 20px black;
`

export const Child = styled.div`
  border-radius: 40px;
  background-color: transparent;
  display: flex;
  align-self: center;
`

const rotate = keyframes`

  100% {
    transform: rotate(36000deg);
  }
`

export const Image = styled.img`
  height: 30%;
  border-radius: 50%;
  box-shadow: 0 0 60px white;
  animation: ${rotate} linear infinite;
  animation-duration: ${props => props.val}s;
`

export const StyledButton = styled.button`
  padding: 5px 10px;
  background-color: black;
  color: #ffffff;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0 0 10px white, 0 0 20px red;
  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 560px) {
    font-size: 10px;
  }
`
