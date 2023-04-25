import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) =>
    props.nothing === "outline" ? "#fff" : "#4caf50"};
  color: ${(props) => (props.nothing !== "outline" ? "#fff" : "#4caf50")};

  padding: ${(props) => {
    switch (props.padding) {
      case "small":
        return "5px 10px";
        break;
      case "medium":
        return "10px 20px";
        break;
      case "large":
        return "20px 30px";
        break;
      default:
        return "30px 40px";
    }
  }};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  cursor: pointer;

  transition: 0.5s all ease-out;

  &:hover {
    background-color: ${(props) =>
      props.nothing !== "outline" ? "#fff" : "#4caf50"};
    color: ${(props) => (props.nothing === "outline" ? "#fff" : "#4caf50")};
  }
`;

export const FancyButton = styled(ButtonStyled)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;


export const SubmitButton=styled(ButtonStyled).attrs({
  type:'submit'
})`
  box-shadow:0px 0px 30px rgba(0,0,0,0.3);
  &:active{
    background-color:${(props)=>
      props.variant!=='outline'?'#fff':'#4caf50'
    };
    box-shadow:0 5px #666;
    transform:translateY(4px);
  }
`

export const ThemeButton=styled(ButtonStyled)`
border:2px solid ${props=>props.theme.dark.primary};
background-color:${props=>props.theme.dark.primary};
color:${props=>props.theme.dark.text}
`