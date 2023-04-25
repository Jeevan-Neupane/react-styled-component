import { ThemeProvider } from "styled-components";
import AnimationComponent from "./Components/Animation";
import Button from "./Components/Button";
import { theme } from "./Styled Components/Theming.Styled";
import { ThemeButton } from "./Styled Components/Button.Styled";
import { GlobalStyled } from "./Styled Components/GlobalStyled";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled/> 
      <div>
        <Button />
        <AnimationComponent />
      </div>
      <ThemeButton>Theme Button</ThemeButton>
    </ThemeProvider>
  );
}

export default App;
