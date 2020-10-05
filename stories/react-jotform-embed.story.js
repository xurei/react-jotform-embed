import React from 'react'; //eslint-disable-line no-unused-vars

import { storiesOf } from '@storybook/react';

//import JotformEmbed from '../lib/cjs/react-jotform-embed';
import JotformEmbed from '../lib/module/react-jotform-embed';

storiesOf('JobformEmbed', module)
.add('Simple', () => <JotformEmbed src="https://form.jotformeu.com/73244192484358" />)
.add('Scrollable', () => <JotformEmbed src="https://form.jotformeu.com/73244192484358" scrolling={true} />);
