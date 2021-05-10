import React from 'react';
import { storiesOf } from '@storybook/react';

import Anchor from './Link';

storiesOf('Design System/Link', module).add('Blue Button Link', () => (
  <Anchor to="/linkDestination">This is a button style link</Anchor>
));

storiesOf('Design System/Link', module).add('Icon Only Link', () => (
  <Anchor className="link--iconOnly link--iconMenu" to="/linkDestination"></Anchor>
));

storiesOf('Design System/Link', module).add('Text Only Link', () => (
  <Anchor to="/linkDestination" linkType="link--textOnly">This ia a text only link</Anchor>
));
