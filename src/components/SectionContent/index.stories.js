import React from 'react';
import { storiesOf } from '@kadira/storybook';
import SectionContent from './index';

storiesOf('SectionContent', module)
  .addWithInfo('default',
    `
      The default use case for the SectionContent component.
    `,

    () => (
      <SectionContent />
    ));
