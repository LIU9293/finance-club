import React from 'react';
import { storiesOf } from '@kadira/storybook';
import JobItem from './index';

storiesOf('JobItem', module)
  .addWithInfo('default',
    `
      The default use case for the JobItem component.
    `,

    () => (
      <JobItem />
    ));
