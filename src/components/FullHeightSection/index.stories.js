import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FullHeightSection from './index';

storiesOf('FullHeightSection', module)
  .addWithInfo('default',
    `
      The default use case for the FullHeightSection component.
    `,

    () => (
      <FullHeightSection />
    ));
