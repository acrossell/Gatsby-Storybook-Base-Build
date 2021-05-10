import React from 'react';
import { storiesOf } from '@storybook/react';

import InputLabel from './InputLabel';

storiesOf('Design System/Input Fields', module).add('Select', () => (
  <InputLabel
    ClassName="className"
    FieldName="textField"
    FieldPlaceholder="Text Field"
  >
    This is a field label
  </InputLabel>
));