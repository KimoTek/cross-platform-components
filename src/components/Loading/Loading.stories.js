import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import { Loading } from './Loading.web';

storiesOf('Loading', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add(
    'Loading',
    () => (
      <Loading
        width={number('width', 100)}
        height={number('height', 100)}
        light={boolean('light', false)}
      />
    ),
    {
      notes: {
        markdown: '## Use for general loading instances'
      }
    }
  );
