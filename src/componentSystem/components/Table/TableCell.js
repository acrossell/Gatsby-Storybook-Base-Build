import React from 'react';
import PropTypes from 'prop-types';

import './TableCell.scss';

const TableCell = ({children}) => {
  return(
    <td className="table__row__cell">
      {children}
    </td>
  )
}

TableCell.defaultProps = {
  children: null,
};

TableCell.propTypes = {
  children: PropTypes.string,
};

export default TableCell
