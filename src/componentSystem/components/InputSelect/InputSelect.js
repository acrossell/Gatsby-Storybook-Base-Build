import React, { Children } from 'react';
import PropTypes from 'prop-types';

import './InputSelect.scss';

const InputSelect = ({FieldName, ClassName, FieldPlaceholder, children}) => (
  <>
    <select className={`inputSelect ${ClassName}`} name={FieldName} placeholder={FieldPlaceholder}>
      {children}
    </select>
  </>
);

InputSelect.defaultProps = {
  ClassName: null,
  FieldInputType: null,
  FieldPlaceholder: null,
};

InputSelect.propTypes = {
  ClassName: PropTypes.string,
  FieldInputType: PropTypes.string,
  FieldPlaceholder: PropTypes.string,
};

export default InputSelect;