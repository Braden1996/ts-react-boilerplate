import * as React from 'react';

import { H1 } from '@atoms/tags';

const longText = Array(100)
  .fill('Lorem ipsum dolor sit amet consectetur adipisicing elit.');

const Content: React.SFC = () => <>
  <H1>Calendar</H1>
  {longText.map((text, idx) => <p key={idx}>{text}</p>)}
</>;

export default Content;
