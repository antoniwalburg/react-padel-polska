import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap');
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Kanit', sans-serif;
        color: white;
    }

    html, body {
        overflow-x: hidden;
    }
`;

export default GlobalStyle;