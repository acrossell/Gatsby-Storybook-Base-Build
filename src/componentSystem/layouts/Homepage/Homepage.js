import React, { useState, createContext } from 'react';

import GlobalNavigation from '../../components/Navigation/Navigation';

const Layout = () => {
  return (
    <main className="homepageLayout hasBackground container">
      <GlobalNavigation></GlobalNavigation>
    </main>
  );
};

export default Layout;
