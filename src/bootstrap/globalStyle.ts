import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

export default function() {
  // tslint:disable no-unused-expression
  injectGlobal`
    ${reset}

    html {
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }
  `;
}
