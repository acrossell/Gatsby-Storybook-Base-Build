import React, { useState, createContext } from 'react';

import Background from '../../components/Background/Background';
import GlobalNavigation from '../../components/Navigation/Navigation';

import NavigationStateContext from '../../../../context';

const Layout = () => {
  return (
    <main className="homepageLayout hasBackground container">
      <GlobalNavigation></GlobalNavigation>
      <Background hasImage={true} />
    </main>
  );
};

export default Layout;
