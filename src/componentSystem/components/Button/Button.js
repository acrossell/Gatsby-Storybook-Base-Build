import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Button.scss';

const Button = ({
  children, className, onClickFunction, iconOnly,
}) => (
  <>
    <button className={`
        button 
        ${classnames(
      iconOnly && 'button--iconOnly',
      className,
    )}`}
    onClick={onClickFunction}>{children}
    </button>
  </>
);

Button.defaultProps = {
  children: null,
  className: null,
  onClickFunction: null,
  iconOnly: null,
};

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClickFunction: PropTypes.string,
  iconOnly: PropTypes.bool,
};

export default Button;
