import React from 'react';
import { storiesOf } from '@kadira/storybook';
import CommentSection from './index';

storiesOf('CommentSection', module)
  .addWithInfo('default',
    `
      The default use case for the CommentSection component.
    `,

    () => (
      <CommentSection />
    ));
