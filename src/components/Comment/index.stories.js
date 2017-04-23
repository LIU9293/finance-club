import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Comment from './index';

storiesOf('Comment', module)
  .addWithInfo('default',
    `
      The default use case for the Comment component.
    `,

    () => (
      <Comment />
    ));
