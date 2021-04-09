import React from 'react';
import { storiesOf } from '@storybook/react'

import Heading from './Heading';

storiesOf('Desgign System/Heading', module).add('Default', () => (
  <>
    <Heading>This is a header</Heading>
  </>
))