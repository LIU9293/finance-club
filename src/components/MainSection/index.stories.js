import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MainSection from './index';

storiesOf('MainSection', module)
  .addWithInfo('default',
    `
      The default use case for the MainSection component.
    `,

    () => (
      <MainSection />
    ));
