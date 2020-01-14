import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  a {
    color: ${theme.htmlTags.a.color};
    cursor: pointer !important;
    display: inline-block;
    font-weight: ${theme.htmlTags.a.fontWeight}
    text-decoration: none;
    transition: transform 0.06s linear;

    &:focus,
    &:hover {
      text-decoration: underline;
    }

    &:active {
      transform: translateY(2px);
    }
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:100,300,400,500,700,800,900');
    background: ${theme.htmlTags.body.background};
    color: ${theme.htmlTags.body.color};
    font-family: ${theme.htmlTags.body.fontFamily};
    font-size: ${theme.htmlTags.body.fontSize};
    height: 100%;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 25px;
    margin-top: 0;
  }
  
  html {
    height: 100%;
  }

  p {
    line-height: 1.5;
    margin-bottom: 25px;
    margin-top: 0;
  }
`;

export default GlobalStyle;
