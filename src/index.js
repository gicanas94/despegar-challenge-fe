import { Normalize } from 'styled-normalize';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import * as serviceWorker from './serviceWorker';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

ReactDOM.render(
  <Fragment>
    <Normalize />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Fragment>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
