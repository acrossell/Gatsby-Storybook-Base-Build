import React from 'react';
import { storiesOf } from '@storybook/react';

import InputSelect from './InputSelect';

storiesOf('Design System/Input Fields', module).add('select', () => (
  <InputSelect
    ClassName="className"
    FieldName="textField"
    FieldPlaceholder="Text Field"
  >
    <option value="" disabled selected>Please Choose an Option...</option>
    <option>This is an option</option>
    <option>This is an option</option>
    <option>This is an option</option>
    <option>This is an option</option>
  </InputSelect>
));