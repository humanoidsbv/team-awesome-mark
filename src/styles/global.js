import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  @font-face {
    font-family: 'Bello Script';
    src: url(fonts/bello-script.ttf) format('truetype');
  }
  
  @font-face {
    font-family: 'Proxima Nova';
    src: url(fonts/proxima-nova-regular.woff) format('woff');
  }

  button {
    background: none;
    border: none;
  }
`;

export default GlobalStyle;
