import { Global, css } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
      html {
        font-size: 1rem;
      }

      body {
        font-size: 0.875rem;
        line-height: 1.5;
        overflow-x: hidden;
      }
    `}
  />
);
