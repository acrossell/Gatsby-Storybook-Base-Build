import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import LinkFade from '../LinkFade/LinkFade';
import { globalHistory } from '@reach/router'

import './Navigation.scss';
import Button from '../Button/Button';

import NavigationStateContext from '../../../../context';

const GlobalNavigation = () => {
  const [state, setState] = useState(true);

  // Check to see if menu is open when page route changes on mobile. Close menu if it is.
  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH' && window.innerWidth < 768) {
        NavigationStateContext.isOpen = false  
      }
    })
  }, )

  // Nav button check If menu is hidden hide and vice versa.
  function toggle() {
    console.log("fired")
    if (NavigationStateContext.isOpen === true) {
      NavigationStateContext.isOpen = false;
      setState(!state);
    } 
    else {
      NavigationStateContext.isOpen = true;
      setState(!state);
    }
  }

  return (
    <nav className="globalNavigation">
      <Button className={`navigationToggle button--iconOnly button--iconMenu ${NavigationStateContext.isOpen ? 'button--iconMenu--open' : ''}`} onClickFunction={toggle}></Button>
      <div className={`globalNavigation__wrapper  ${NavigationStateContext.isOpen ? 'globalNavigation__wrapper--active' : ''}`}>
        <ul className="globalNavigation__list">
          <li className="globalNavigation__list__item globalNavigation__list__item--hide"><Button className={`button--iconOnly button--iconMenu ${NavigationStateContext.isOpen ? 'button--iconMenu--open' : ''}`} onClickFunction={toggle}></Button></li>
          <li className="globalNavigation__list__item">
            <LinkFade url={'/'}>Home</LinkFade>
          </li>
          <li className="globalNavigation__list__item">
            <LinkFade url={'/work'}>Work</LinkFade>
          </li>
          <li className="globalNavigation__list__item">
            <LinkFade url={'/case-study'}>Case Study</LinkFade>
          </li>
        </ul>
      </div>
    </nav>
  );
};

GlobalNavigation.defaultProps = {
  level: null,
  isActive: null,
};

GlobalNavigation.propTypes = {
  level: PropTypes.number,
  isActive: PropTypes.bool,
};

export default GlobalNavigation;
