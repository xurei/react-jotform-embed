import React from 'react'; //eslint-disable-line no-unused-vars

import { storiesOf } from '@storybook/react';

import JotformEmbed from '../src/react-jotform-embed';

storiesOf('JobformEmbed', module)
.add('with text', () => <JotformEmbed src="https://form.jotformeu.com/73244192484358" />);
