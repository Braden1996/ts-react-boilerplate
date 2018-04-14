import * as storybook from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs/react';

import initExtensions from './extensions';

storybook.addDecorator(checkA11y);
storybook.addDecorator(centered);
storybook.addDecorator(withKnobs);

initExtensions(storybook);

const req = require.context('../src', true, /.stories.tsx$/);
storybook.configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
