import React from 'react';
import { storiesOf } from '@storybook/react';

import Background from './Background';

storiesOf('Design System/Background', module).add('Squares', () => (
  <>
    <Background hasImage />
  </>
));
