import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  @font-face {
    font-family: 'Bello Script';
    src: url(fonts/bello-script.ttf);
  }
  
  @font-face {
    font-family: 'Proxima Nova';
    src: url(fonts/proxima-nova-regular.woff);
}

`;
 
export default GlobalStyle;