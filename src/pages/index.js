import * as React from 'react';

import '../componentSystem/layouts/Homepage/Homepage.scss';
import Layout from '../componentSystem/layouts/DefaultLayout/DefaultLayout';
import Paragraph from '../componentSystem/components/Paragraph/Paragraph';
import Heading from '../componentSystem/components/Heading/Heading';
import Anchor from '../componentSystem/components/Link/Link';
import HorizontalRule from '../componentSystem/components/HorizontalRule/HorizontalRule';

const IndexPage = () => (
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
      <Anchor linkDestination="/work">View my work</Anchor>
    </div>
  </Layout>
);

export default IndexPage;
