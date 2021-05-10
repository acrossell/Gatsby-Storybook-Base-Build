import React, { Children } from 'react';
import PropTypes from 'prop-types';

import './InputLabel.scss';

const InputLabel = ({ClassName, children}) => (
  <>
    <label className={`inputLabel ${ClassName}`}>{children}</label>
  </>
);

InputLabel.defaultProps = {
  ClassName: null,
};

InputLabel.propTypes = {
  ClassName: PropTypes.string,
};

export default InputLabel;