import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    body {
        font-family: 'Roboto', sans-serif;
        display: flex;
  flex-direction: column;
  min-height: 100vh;
       
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    button {
        cursor: pointer;
    }
    ul {
        list-style: none;
    }
    img {
        max-width: 100%;
    }
    `;