import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import './Link.scss';

const Anchor = ({ children, linkDestination, className, linkType }) => (
  <>
    <Link className={`link ${className} ${linkType}`} to={linkDestination}>{children}</Link>
  </>
);

Anchor.defaultProps = {
  children: null,
  linkDestination: null,
  className: null,
  linkType: null,
};

Anchor.propTypes = {
  children: PropTypes.string,
  linkDestination: PropTypes.string,
  className: PropTypes.string,
  linkType: PropTypes.string,
};

export default Anchor;
