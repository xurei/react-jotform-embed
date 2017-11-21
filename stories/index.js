import React from 'react'; //eslint-disable-line no-unused-vars

import { storiesOf } from '@storybook/react';

const JobformEmbed = require('../src/react-jotform-embed');

storiesOf('JobformEmbed', module)
  .add('with text', () => <JobformEmbed src="https://form.jotformeu.com/73244192484358" />)
  .add('with long text', () => <JobformEmbed src="https://form.jotformeu.com/72293297018360" />)
