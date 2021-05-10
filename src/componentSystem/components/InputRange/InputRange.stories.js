import React from 'react';
import { storiesOf } from '@storybook/react';

import InputRange from './InputRange';

storiesOf('Design System/Input Fields', module).add('Range', () => (
  <InputRange
    ClassName="className"
    FieldInputType="range"
    FieldName="rangeField"
    FieldPlaceholder="Range Field"
  />
));