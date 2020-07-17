import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap');

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.colors.background};
  }

  body, input, button {
    font-family: ${(props) => props.theme.font.family};
    font-size: ${(props) => props.theme.font.size};
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
