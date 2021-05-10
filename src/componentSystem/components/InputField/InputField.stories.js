import React from 'react';
import { storiesOf } from '@storybook/react';

import InputField from './InputField';

storiesOf('Design System/Input Fields', module).add('Text', () => (
  <InputField
    ClassName="className"
    FieldInputType="text"
    FieldName="textField"
    FieldPlaceholder="Text Field"
  />
));

storiesOf('Design System/Input Fields', module).add('Number', () => (
  <InputField
    ClassName="className"
    FieldInputType="number"
    FieldName="numberField"
    FieldPlaceholder="1234567890"
  />
));

storiesOf('Design System/Input Fields', module).add('date', () => (
  <InputField
    ClassName="className"
    FieldInputType="date"
    FieldPlaceholder="dateField"
  />
));

storiesOf('Design System/Input Fields', module).add('email', () => (
  <InputField
    ClassName="className"
    FieldInputType="emailField"
    FieldName="numberField"
    FieldPlaceholder="email@emailprovider.com"
  />
));

storiesOf('Design System/Input Fields', module).add('password', () => (
  <InputField
    ClassName="className"
    FieldInputType="password"
    FieldName="passwordField"
    FieldPlaceholder="********"
  />
));

storiesOf('Design System/Input Fields', module).add('telephone', () => (
  <InputField
    ClassName="className"
    FieldInputType="telephone"
    FieldName="telephoneField"
    FieldPlaceholder="0191 123 4567"
  />
));