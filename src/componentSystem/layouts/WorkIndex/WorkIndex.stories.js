import React from 'react';
import { storiesOf } from '@storybook/react';

import './WorkIndex.scss';
import Layout from '../DefaultLayout/DefaultLayout';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Heading from '../../components/Heading/Heading';
import HorizontalRule from '../../components/HorizontalRule/HorizontalRule';

import TestImage from '../../../images/projectCardImage.png';

storiesOf('layouts/Work Index', module).add('Work Index', () => (
  <Layout
    ClassName="workIndexLayout"
  >
    <div className="workIndexLayout__column col-md-offset-6 col-md-6 col-lg-offset-6 col-lg-4">
      <Heading level={1}>My Work</Heading>
      <Heading level={2} spacing="marginBottom24">
        UX & Front End Designer
      </Heading>
      <HorizontalRule spacing="marginBottom40" />
      <div className="marginBottom88">
        <ProjectCard
          imageSrc={TestImage}
          imageAlt="This is the test image"
          projectTitle="Title"
          linkDestination="Test"
        />
      </div>
      <div className="marginBottom88">
        <ProjectCard
          imageSrc={TestImage}
          imageAlt="This is the test image"
          projectTitle="Title"
          linkDestination="Test"
        />
      </div>
      <div className="marginBottom88">
        <ProjectCard
          imageSrc={TestImage}
          imageAlt="This is the test image"
          projectTitle="Title"
          linkDestination="Test"
        />
      </div>
      <div className="marginBottom88">
        <ProjectCard
          imageSrc={TestImage}
          imageAlt="This is the test image"
          projectTitle="Title"
          linkDestination="Test"
        />
      </div>
      <div className="marginBottom88">
        <ProjectCard
          imageSrc={TestImage}
          imageAlt="This is the test image"
          projectTitle="Title"
          linkDestination="Test"
        />
      </div>
      <div className="">
        <ProjectCard
          imageSrc={TestImage}
          imageAlt="This is the test image"
          projectTitle="Title"
          linkDestination="Test"
        />
      </div>
    </div>
  </Layout>
));
