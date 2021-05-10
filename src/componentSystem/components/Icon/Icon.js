import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  icon: IconComponent,
  colour,
}) => (
  <>
    <IconComponent
      style={{ fill: colour }}
    />
  </>
);

Icon.defaultProps = {
  colour: null,
  icon: null,
};

Icon.propTypes = {
  colour: PropTypes.string,
  icon: PropTypes.object,
};

export default Icon;
