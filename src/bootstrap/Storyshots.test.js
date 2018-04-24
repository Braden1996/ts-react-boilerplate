import initStoryshots, {
  multiSnapshotWithOptions
} from '@storybook/addon-storyshots';
import { shallow } from 'enzyme';
import { addSerializer } from 'jest-specific-snapshot'
import * as styleSheetSerializer
  from 'jest-styled-components/src/styleSheetSerializer';

addSerializer(styleSheetSerializer);

initStoryshots({
  renderer: shallow,
  test: multiSnapshotWithOptions({}),
});
