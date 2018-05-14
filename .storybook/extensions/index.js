import background from './background';
import emotion from './emotion';
import options from './options';

export default function init(storybook) {
  background(storybook);
  emotion(storybook);
  options(storybook);
}
