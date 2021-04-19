import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './Paragraph.scss'

const Paragraph = ({children, isLeadIn, className}) => {
  return(
    <p className={`paragraph ${classnames(
      isLeadIn && `isLeadIn`,
      className
    )}`}
    >{children}</p>
  );
}

Paragraph.defaultProps = {
  level: null,
  className: null,
  isLeadIn: null
}

Paragraph.propTypes = {
  level: PropTypes.number,
  className: PropTypes.string,
  isLeadIn: PropTypes.bool
}

export default Paragraph