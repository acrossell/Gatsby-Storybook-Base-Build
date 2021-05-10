import React from 'react';
import { storiesOf } from '@storybook/react';

import Heading from './Heading';

storiesOf('Design System/Heading', module).add(
  'Default',
  () => (
    <>
      <Heading level={1}>Heading level 1</Heading>
      <Heading level={2}>Heading level 2</Heading>
      <Heading level={3}>Heading level 3</Heading>
      <Heading level={4}>Heading level 4</Heading>
      <Heading level={5}>Heading level 5</Heading>
      <Heading level={6}>Heading level 6</Heading>
    </>
  ),
  {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/tEEXugbh6mV5uFvEnZ85TK/Hedgehog-Lab-Design-System-Boiler-Plate?node-id=4%3A9',
    },
  },
);
