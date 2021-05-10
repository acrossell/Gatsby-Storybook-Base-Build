import React from 'react';
import PropTypes from 'prop-types';

import './InputRange.scss';

const InputRange = ({FieldInputType, FieldName, ClassName}) => (
  <>
    <input className={`inputField ${ClassName}`} type={FieldInputType} name={FieldName}></input>
  </>
);

InputField.defaultProps = {
  ClassName: null,
  FieldInputType: null,
  FieldName: null,
};

InputField.propTypes = {
  ClassName: PropTypes.string,
  FieldInputType: PropTypes.string,
  FieldName: PropTypes.string,
};

export default InputRange;