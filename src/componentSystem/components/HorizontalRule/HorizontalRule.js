import React from 'react';
import PropTypes from 'prop-types';
import './HorizontalRule.scss';

const HorizontalRule = ({ spacing }) => (
  <hr className={`horizontalRule ${spacing}`} />
);

HorizontalRule.defaultProps = {
  spacing: null,
};

HorizontalRule.propTypes = {
  spacing: PropTypes.string,
};

export default HorizontalRule;
