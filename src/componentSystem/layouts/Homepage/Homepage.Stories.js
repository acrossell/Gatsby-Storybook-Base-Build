import React from 'react';
import { storiesOf } from '@storybook/react';

import './Homepage.scss';
import Layout from '../DefaultLayout/DefaultLayout';
import Paragraph from '../../components/Paragraph/Paragraph';
import Heading from '../../components/Heading/Heading';
import Anchor from '../../components/Link/Link';
import HorizontalRule from '../../components/HorizontalRule/HorizontalRule';

storiesOf('layouts/Homepage', module).add('Homepage', () => (
  <Layout
    ClassName="homepageLayout"
    hasImage={true}
  >
    <div className="homepageLayout__column col-md-offset-6 col-md-6 col-lg-offset-6 col-lg-4">
      <Heading level={1}>Alex Rossell</Heading>
      <Heading level={2} spacing="marginBottom24">
        UX & Front End Designer
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
      <Anchor to="/linkDestination">View my work</Anchor>
    </div>
  </Layout>
));
