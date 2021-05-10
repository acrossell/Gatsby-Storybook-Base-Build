import React from 'react';
import PropTypes from 'prop-types';
import './Heading.scss';

const Heading = ({ children, level, spacing }) => {
  const Element = `h${level}`;

  return <Element className={spacing}>{children}</Element>;
};

Heading.defaultProps = {
  level: null,
  children: null,
  spacing: null,
};

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.string,
  spacing: PropTypes.string,
};

export default Heading;
