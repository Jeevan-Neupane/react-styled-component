import styled, {  keyframes } from "styled-components";



const rotate=keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

export const AnimatedDiv=styled.div`
pointer-events:none;
animation: ${rotate} infinite 20s linear;
width:300px;
height:300px;
background-color: green;


`

