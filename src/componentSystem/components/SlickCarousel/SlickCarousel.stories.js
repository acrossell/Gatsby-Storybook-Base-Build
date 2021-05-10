import React from 'react';
import { storiesOf } from '@storybook/react';

import SimpleSlider from './SlickCarousel';

storiesOf('Design System/Carousel', module).add('Carousel', () => (
  <>
    <SimpleSlider>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </SimpleSlider>
  </>
));
