import { Global, css } from '@emotion/core';
import React from 'react';

import '../styles/main.scss';

/*
 * Top-level global styles
 */
const GlobalStyles = () => (
  <Global
    styles={css`
      /* Set font rendering */
      body {
        /* stylelint-disable */
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-feature-settings: 'pnum';
        /* stylelint-enable */
        text-rendering: optimizeLegibility;
        font-feature-settings: 'pnum';
        font-variant-numeric: proportional-nums;
      }
    `}
  />
);

export default GlobalStyles;
