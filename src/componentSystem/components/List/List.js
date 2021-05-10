import React from 'react';
import PropTypes from 'prop-types';

import './List.scss';

const List = ({ children, className, ListType }) => {
  
  //Create list element according to list type prop
  if (ListType === "dl") {
    var Element = "dl"
  } else if (ListType === "ol") {
    var Element = "ol"
  } else {
    var Element = "ul"
  }

  return (
    <Element className={`list ${className}`}>{children}</Element>
  )
}

List.defaultProps = {
  children: null,
  className: null,
  ListType: null,
};

List.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  ListType: PropTypes.oneOf([
    'ul',
    'ol',
    'dl',
  ]),
};

export default List;