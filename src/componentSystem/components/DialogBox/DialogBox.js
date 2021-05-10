import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import Button from '../Button/Button'

import './DialogBox.scss';

const DialogBox = ({
  ClassName, DialogHeading, DialogCopy
}) => (
  <div className={`dialogBox ${ClassName}`}>
    <Heading level={1}>
      {DialogHeading}
    </Heading>
    <Paragraph>
      {DialogCopy}
    </Paragraph>
    <div className="row">
      <div className="col-xs-6">
        <Button>Accept</Button>
      </div>
      <div className="col-xs-6">
        <Button>Cancel</Button>
      </div>
    </div>
  </div>
);

DialogBox.defaultProps = {
  ClassName: null,
  DialogHeading: null,
  DialogCopy: null,
};

DialogBox.propTypes = {
  ClassName: PropTypes.string,
  DialogHeading: PropTypes.string,
  DialogCopy: PropTypes.string,
};

export default DialogBox;