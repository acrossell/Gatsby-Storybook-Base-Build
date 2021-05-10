import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

import '../../../globalStyles/main.scss'
import GlobalNavigation from '../../components/Navigation/Navigation';

const Layout = ({ClassName, children, hasImage}) => {
  return (
    <main className={`hasBackground container ${ClassName}`}>
      <GlobalNavigation></GlobalNavigation>
      {children}
    </main>
  );
};

export default Layout;

Layout.defaultProps = {
  ClassName: null,
  hasImage: false,
};

Layout.propTypes = {
  ClassName: PropTypes.string,
  hasImage: PropTypes.bool,
};
