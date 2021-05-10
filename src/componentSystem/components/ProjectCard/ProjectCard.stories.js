import React from 'react';
import { storiesOf } from '@storybook/react';

import ProjectCard from './ProjectCard';
import TestImage from '../../../images/projectCardImage.png';

storiesOf('Design System/Project Card', module).add(
  'Default',
  () => (
    <>
      <ProjectCard
        imageSrc={TestImage}
        imageAlt='This is the test image'
        projectTitle="Title"
        linkDestination="/test"
      />
    </>
  ),
  {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/tEEXugbh6mV5uFvEnZ85TK/Hedgehog-Lab-Design-System-Boiler-Plate?node-id=4%3A9',
    },
  },
);
