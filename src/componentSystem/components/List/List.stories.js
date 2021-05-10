import React from 'react';
import { storiesOf } from '@storybook/react';

import List from './List';

storiesOf('Design System/Lists', module).add('Unordered List', () => (
  <List ListType={"ul"}>
    <li className="list__item">Unordered list item</li>
    <li className="list__item">Unordered list item</li>
    <li className="list__item">Unordered list item</li>
    <li className="list__item">Unordered list item</li>
  </List>
));

storiesOf('Design System/Lists', module).add('Ordered List', () => (
  <List ListType={"ol"}>
    <li className="list__item">Ordered list item</li>
    <li className="list__item">Ordered list item</li>
    <li className="list__item">Ordered list item</li>
    <li className="list__item">Ordered list item</li>
  </List> 
));

storiesOf('Design System/Lists', module).add('Definition List', () => (
  <List ListType={"dl"}>
    <dt className="list__itemTerm">Definition List Title</dt>
    <dd className="list__itemDescription">Definition List Description</dd>
    <dt className="list__itemTerm">Definition List Title</dt>
    <dd className="list__itemDescription">Definition List Description</dd>
    <dt className="list__itemTerm">Definition List Title</dt>
    <dd className="list__itemDescription">Definition List Description</dd>
    <dt className="list__itemTerm">Definition List Title</dt>
    <dd className="list__itemDescription">Definition List Description</dd>
  </List>
));