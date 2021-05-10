import React from 'react';
import PropTypes from 'prop-types';

import './TableHeader.scss';

const TableHeader = ({children}) => {
  return(
    <th className="table__row__header">
      {children}
    </th>
  )
}

TableHeader.defaultProps = {
  children: null,
};

TableHeader.propTypes = {
  children: PropTypes.string,
};

export default TableHeader