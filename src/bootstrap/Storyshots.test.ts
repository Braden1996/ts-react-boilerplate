import initStoryshots, {
  multiSnapshotWithOptions
  // @ts-ignore
} from '@storybook/addon-storyshots';


import * as styleSheetSerializer
  // @ts-ignore
  from 'jest-styled-components/src/styleSheetSerializer';

import { addSerializer } from 'jest-specific-snapshot'

addSerializer(styleSheetSerializer);

initStoryshots({
  test: multiSnapshotWithOptions({})
});
