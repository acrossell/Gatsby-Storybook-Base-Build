import React from 'react';
import PropTypes from 'prop-types';

import './InputField.scss';

const InputField = ({FieldInputType, FieldName, ClassName, FieldPlaceholder}) => (
  <>
    <input className={`inputField ${ClassName}`} type={FieldInputType} name={FieldName} placeholder={FieldPlaceholder}></input>
  </>
);

InputField.defaultProps = {
  ClassName: null,
  FieldInputType: null,
  FieldName: null,
  FieldPlaceholder: null,
};

InputField.propTypes = {
  ClassName: PropTypes.string,
  FieldInputType: PropTypes.string,
  FieldName: PropTypes.string,
  FieldPlaceholder: PropTypes.string,
};

export default InputField;
