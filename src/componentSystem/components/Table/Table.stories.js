import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from './Table';
import TableHeader from './TableHeader'
import TableCell from './TableCell'

storiesOf('Design System/Table', module).add('Table', () => (
  <Table>
    <tr>
      <TableHeader>
        Table Cell Header
      </TableHeader>
      <TableHeader>
        Table Cell Header
      </TableHeader>
      <TableHeader>
        Table Cell Header
      </TableHeader>
      <TableHeader>
        Table Cell Header
      </TableHeader>
      <TableHeader>
        Table Cell Header
      </TableHeader>
    </tr>
    <tr>
      <TableCell>
        Table Cell Header
      </TableCell>
      <TableCell>
        Table Cell Header
      </TableCell>
      <TableCell>
        Table Cell Header
      </TableCell>
      <TableCell>
        Table Cell Header
      </TableCell>
      <TableCell>
        Table Cell Header
      </TableCell>
    </tr>
    <tr>
      <TableCell>
        Table Cell Header
      </TableCell>
      <TableCell>
        Table Cell Header
      </TableCell>
      <TableCell>
        Table Cell Header
      </TableCell>
      <TableCell>
        Table Cell Header
      </TableCell>
      <TableCell>
        Table Cell Header
      </TableCell>
    </tr>
    <tr>
      <TableCell>
        Table Cell Header
      </TableCell>
      <TableCell>
        Table Cell Header
      </TableCell>
      <TableCell>
        Table Cell Header
      </TableCell>
      <TableCell>
        Table Cell Header
      </TableCell>
      <TableCell>
        Table Cell Header
      </TableCell>
    </tr>
    
  </Table>
));