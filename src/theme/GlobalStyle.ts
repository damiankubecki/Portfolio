import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Caveat', cursive;
    font-family: 'Rajdhani', sans-serif;
  }
  
  html {
    font-size: 62.5%; 

  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
  }
  `;

export default GlobalStyle;
