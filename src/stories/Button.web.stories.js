import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import {
  Button,
  ButtonSecondary,
  DarkButton,
  SecondaryDarkButton
} from '../components/Button/Button.web';

storiesOf('Web Buttons', module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .add(
    'Primary Button',
    () => (
      <Button
        loading={boolean('loading', false)}
        disabled={boolean('disabled', false)}
      >
        {text('text', 'Primary Button')}
      </Button>
    ),
    {
      notes: {
        markdown:
          '## This is our primary default button, used for the main call to action. There is usually only one on any page.'
      }
    }
  )
  .add(
    'Secondary Button',
    () => (
      <ButtonSecondary
        loading={boolean('loading', false)}
        disabled={boolean('disabled', false)}
      >
        {text('text', 'Secondary Button')}
      </ButtonSecondary>
    ),
    {
      notes: {
        markdown:
          '## This is our secondary button, used for the secondary call to action. There can be multiple per page. It is usually coupled with a primary button, but can be used alone if a layout needs a subtle main CTA.'
      }
    }
  )
  .add(
    'Dark Button',
    () => (
      <DarkButton
        loading={boolean('loading', false)}
        disabled={boolean('disabled', false)}
      >
        {text('text', 'Dark Button')}
      </DarkButton>
    ),
    {
      notes: {
        markdown:
          '## This is our dark button, used for a call to action primary on a light themed page.'
      }
    }
  )
  .add(
    'Secondary Dark Button',
    () => (
      <SecondaryDarkButton
        loading={boolean('loading', false)}
        disabled={boolean('disabled', false)}
      >
        {text('text', 'Secondary Dark Button')}
      </SecondaryDarkButton>
    ),
    {
      notes: {
        markdown:
          '## This is a secondary dark button usually coupled with a Dark Button.'
      }
    }
  );
