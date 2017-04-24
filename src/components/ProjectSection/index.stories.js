import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ProjectSection from './index';

storiesOf('ProjectSection', module)
  .addWithInfo('default',
    `
      The default use case for the ProjectSection component.
    `,

    () => (
      <ProjectSection />
    ));
