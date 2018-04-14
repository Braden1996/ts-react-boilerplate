import { default as background } from './background';
import { default as options } from './options';
import { default as styledComponents } from './styled-components';

export default function init(storybook) {
  background(storybook);
  options(storybook);
  styledComponents(storybook);
}
