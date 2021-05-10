import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './Icon';

import { ReactComponent as Menu } from '../../../images/svg/icon-openMenu.svg';

storiesOf('Design System/Icon', module).add('Default', () => (
  <Icon icon={<Menu></Menu>} colour="#FAFAFA" />
));
