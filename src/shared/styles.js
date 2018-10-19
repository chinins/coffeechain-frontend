import { injectGlobal } from 'emotion';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight 400;
    width: 100%;
    min-height: 100%;
  }
`;
