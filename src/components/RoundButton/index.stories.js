import React from 'react';
import { storiesOf } from '@kadira/storybook';
import RoundButton from './index';

storiesOf('RoundButton', module)
  .addWithInfo('styled-components based round button',
    `
      The default use case for the RoundButton component.
    `,

    () => (
      <div>
        <RoundButton>button default</RoundButton>
        <RoundButton primary block>button block</RoundButton>
        <RoundButton primary>button primary</RoundButton>
      </div>

    ));
