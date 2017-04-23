import React from 'react';
import { storiesOf } from '@kadira/storybook';
import IntroSection from './index';

storiesOf('IntroSection', module)
  .addWithInfo('default',
    `
      The default use case for the IntroSection component.
    `,

    () => (
      <IntroSection />
    ));
