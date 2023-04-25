import {ButtonStyled,FancyButton,SubmitButton} from "../Styled Components/Button.Styled"

function Button() {
  return (

       <div>
      <ButtonStyled padding='small'>Button</ButtonStyled>
      <div/>
      <br/>
      <ButtonStyled nothing='outline' padding='medium'>Button</ButtonStyled>
      <div/>
      <br/>
      <ButtonStyled nothing='outline' padding='large'>Button</ButtonStyled>
      <div/>
      <br/>
      <ButtonStyled >Button</ButtonStyled>
      <div/>
      <br/>
      <FancyButton padding='medium' as='a'>I am Fancy</FancyButton>
      <div/>
      <br/>
      <SubmitButton variant='outline'>Submit</SubmitButton>
    </div>
  
  )
}

export default Button
