import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Header from './index';

storiesOf('Header', module)
  .addWithInfo('default',
    `
      The default use case for the Header component.
    `,

    () => (
      <Header />
    ));
