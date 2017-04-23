import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Footer from './index';

storiesOf('Footer', module)
  .addWithInfo('default',
    `
      The default use case for the Footer component.
    `,

    () => (
      <Footer />
    ));
