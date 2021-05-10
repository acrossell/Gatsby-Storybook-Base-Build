import React from 'react';
import { storiesOf } from '@storybook/react';

import './CaseStudy.scss';
import Layout from '../DefaultLayout/DefaultLayout';
import Paragraph from '../../components/Paragraph/Paragraph';
import Heading from '../../components/Heading/Heading';
import HorizontalRule from '../../components/HorizontalRule/HorizontalRule';
import SimpleSlider from '../../components/SlickCarousel/SlickCarousel';

import TestImage from '../../../images/projectCardImage.png';

storiesOf('layouts/Case Study', module).add('Case Study', () => (
  <Layout
    ClassName="caseStudyLayout"
  >
    <div className="row">
      <div className="caseStudyLayout__columnA col-xs-12 col-lg-6">
        <SimpleSlider>
          <div>
            <img src={TestImage}></img>
          </div>
          <div>
            <img src={TestImage}></img>
          </div>
          <div>
            <img src={TestImage}></img>
          </div>
          <div>
            <img src={TestImage}></img>
          </div>
          <div>
            <img src={TestImage}></img>
          </div>
          <div>
            <img src={TestImage}></img>
          </div>
        </SimpleSlider>
      </div>
      <div className="caseStudyLayout__columnB col-xs-12 col-lg-offset-1 col-lg-4">
        <Heading level={1}>Project Title</Heading>
        <Heading level={2} spacing="marginBottom24">
          Design & UI Development
        </Heading>
        <HorizontalRule spacing="marginBottom40" />
        <Paragraph isLeadIn={true}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Paragraph>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paragraph>
      </div>
    </div>
  </Layout>
));