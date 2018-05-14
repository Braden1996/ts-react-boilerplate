import { injectGlobal } from 'emotion';
// @ts-ignore
import emotionNormalize from 'emotion-normalize';

export default function() {
  // tslint:disable no-unused-expression
  injectGlobal`
    ${emotionNormalize}

    html {
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }
  `;
}
