import React from 'react';
import PropTypes from 'prop-types';

import './Table.scss';

const Table = ({children}) => {
  return(
    <table className="table">
      {children}
    </table>
  )
}

Table.defaultProps = {
  children: null,
};

Table.propTypes = {
  children: PropTypes.node,
};

export default Table
