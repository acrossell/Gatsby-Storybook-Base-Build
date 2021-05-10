import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Design System/Button', module).add('Default', () => (
  <Button>This is a default button</Button>
));

storiesOf('Design System/Button', module).add('Icon Only Button', () => (
  <Button className="button--iconMenu" iconOnly={true}></Button>
));
