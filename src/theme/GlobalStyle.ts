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

  ::-webkit-scrollbar {
    width: 22px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.primary};
    border: 0;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.additional};
    border: 8px solid ${({ theme }) => theme.primary};
    border-radius: 25px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.additional};
  }
  `;

export default GlobalStyle;
