import React from 'react';
import { storiesOf } from '@storybook/react';
import TxtField from './TxtField';
import Checkboxes from './Checkboxes'
import InpSub from './InpSub';

storiesOf('Input Type Submit Buttons', module)
  .add('New', () => <InpSub label="New EVENT" type="new" />)
  .add('Delete', () => <InpSub label="Delete" type="delete" />)
  .add('Edit', () => <InpSub label="Edit" type="edit" />)
  .add('Save', () => <InpSub label="Save ITEM" type="save" />)

storiesOf('Text Fields', module)
  .add("Input default", () => <TxtField size="default"></TxtField>)

storiesOf('Check Boxes', module)
  .add("Blue Check Box", () => <Checkboxes color='blue' />)
