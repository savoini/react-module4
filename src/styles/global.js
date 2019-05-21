import { createGlobalStyle } from 'styled-components';

import 'rc-slider/assets/index.css';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
      height: 100%;
    }

    body {
        color: #FFF;
        background: #181818;
        font-family: 'Montserrat', sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }
`;

export default GlobalStyle;
