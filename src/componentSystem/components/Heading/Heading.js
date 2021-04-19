import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Heading.scss'

const Heading = ({children, level, className}) => {

  const Element = `h${level}`
  
  return(
    <Element>{children}</Element>
  );
}

Heading.defaultProps = {
  level: null,
  className: null,
  children: null
}

Heading.propTypes = {
  level: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.string
}

export default Heading