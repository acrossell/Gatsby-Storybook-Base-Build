import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';
import './ProjectCard.scss';

const Projectcard = ({
  imageSrc, imageAlt, projectTitle, linkDestination,
}) => (
  <Link className="projectCard" to={linkDestination}>
    <div className="projectCard__imageWrapper">
      <img src={imageSrc} alt={imageAlt} />
    </div>
    <Heading level={2}>{projectTitle}</Heading>
  </Link>
);

Projectcard.defaultProps = {
  imageSrc: null,
  imageAlt: null,
  projectTitle: null,
  linkDestination: null,
};

Projectcard.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  projectTitle: PropTypes.string,
  linkDestination: PropTypes.string,
};

export default Projectcard;
