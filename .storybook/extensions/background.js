import backgrounds from "@storybook/addon-backgrounds";

import { theme } from '@theme';

function themeColorsToBackground(colors) {
  let bgs = [];

  for (const [name, value] of Object.entries(colors)) {
    if (typeof value === 'object') {
      const nestedBgs = themeColorsToBackground(value)
        .map(bg => ({name: `${name}/${bg.name}`, value: bg.value}))
      bgs = bgs.concat(nestedBgs)
    } else {
      bgs.push({name, value})
    }
  }

  return bgs;
}

export default function init(storybook) {
  const bgs = themeColorsToBackground(theme.colors);

  storybook.addDecorator(backgrounds(bgs));
}
