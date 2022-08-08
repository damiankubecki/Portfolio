import { createGlobalStyle } from 'styled-components';
import { ITheme } from 'types/types';

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Caveat', cursive;
    font-family: 'Roboto', sans-serif;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.primary};
  }
  `;

export default GlobalStyle;
