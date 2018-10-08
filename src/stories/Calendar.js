import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import Calendar from '../ui';
import withDocsCustom from './utils/withDocsCustom';
import CalendarReadme from '../docs/Calendar.md';

const defaultValue = '';

storiesOf('Calendar/ default', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsCustom(CalendarReadme))
  .add('default', () => (
    <Calendar />
  ));
