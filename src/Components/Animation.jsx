import styled from "styled-components"
import { AnimatedDiv } from "../Styled Components/Animation.Styled"


const Body=styled.div`
    width:100%;
    height:100vh;
    display: flex;
    align-items:center;
    justify-content:center;
`


function AnimationComponent() {
  return (
    <Body>
    <AnimatedDiv>
      
    </AnimatedDiv>
    </Body>
  )
}

export default AnimationComponent
