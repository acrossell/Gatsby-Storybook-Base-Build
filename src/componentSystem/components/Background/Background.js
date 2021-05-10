import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Background.scss';

const Background = ({ hasImage }) => (
  <div className="backgroundGrid">
    <div className="squareParent squareParent--item1">
      <div className="squareParent__squareChild item1" />
      <div className="squareParent__squareChild item2" />
      <div className="squareParent__squareChild item3" />
      <div className="squareParent__squareChild item4" />
    </div>
    <div className="squareParent squareParent--item2" />
    <div className="squareParent squareParent--item3" />
    <div className="squareParent squareParent--item4">
      <div className="squareParent__squareChild item1" />
      <div className="squareParent__squareChild item2" />
      <div className="squareParent__squareChild item3" />
      <div className="squareParent__squareChild item4" />
    </div>
    <div
      className={`squareParent squareParent--item5 
        ${classnames(hasImage && 'squareParent--image')}`}
    >
      <div className="squareParent__squareChild item1" />
      <div className="squareParent__squareChild item2" />
      <div className="squareParent__squareChild item3" />
      <div className="squareParent__squareChild item4" />
    </div>
    <div className="squareParent squareParent__item6" />
    <div className="squareParent squareParent--item7">
      <div className="squareParent__squareChild item1" />
      <div className="squareParent__squareChild item2" />
      <div className="squareParent__squareChild item3" />
      <div className="squareParent__squareChild item4" />
    </div>
    <div className="squareParent squareParent--item8">
      <div className="squareParent__squareChild item1" />
      <div className="squareParent__squareChild item2" />
      <div className="squareParent__squareChild item3" />
      <div className="squareParent__squareChild item4" />
    </div>
    <div className="squareParent squareParent--item9">
      <div className="squareParent__squareChild item1" />
      <div className="squareParent__squareChild item2" />
      <div className="squareParent__squareChild item3" />
      <div className="squareParent__squareChild item4" />
    </div>
  </div>
);

Background.defaultProps = {
  hasImage: false,
};

Background.propTypes = {
  hasImage: PropTypes.bool,
};

export default Background;
