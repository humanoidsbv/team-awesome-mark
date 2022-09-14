import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  @font-face {
    font-family: 'Bello-Script';
    src: url(fonts/bello-script.ttf) format('truetype');
  }
  
  @font-face {
    font-family: 'Proxima Nova';
    src: url(fonts/proxima-nova-light.woff) format('woff');
}

`;
 
export default GlobalStyle;