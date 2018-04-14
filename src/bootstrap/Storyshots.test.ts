import initStoryshots, {
  multiSnapshotWithOptions
  // @ts-ignore
} from '@storybook/addon-storyshots';

// @ts-ignore
import * as styleSheetSerializer from 'jest-styled-components/src/styleSheetSerializer';

import { addSerializer } from 'jest-specific-snapshot'

addSerializer(styleSheetSerializer);

initStoryshots({
  test: multiSnapshotWithOptions({})
});
