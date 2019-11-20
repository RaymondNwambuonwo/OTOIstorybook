import React from 'react';
import { storiesOf } from '@storybook/react';
import TxtField from './TxtField';
import Checkboxes from './Checkboxes'
import InputTypeSubmit from './InputTypeSubmit';
import Button from './Button';
import Select from './Select'


storiesOf('Input Type Submit Buttons', module)
  .add('New', () => <InputTypeSubmit label="New EVENT" type="new" />)
  .add('Delete', () => <InputTypeSubmit label="Delete" type="delete" />)
  .add('Edit', () => <InputTypeSubmit label="Edit" type="edit" />)
  .add('Save', () => <InputTypeSubmit label="Save ITEM" type="save" />)

storiesOf('Text Fields', module)
  .add("Input default", () => <TxtField size="default"></TxtField>)
  .add("Selection Field", () => <Select value="Status"></Select>)

storiesOf('Check Boxes', module)
  .add("Blue Check Box", () => <Checkboxes color='blue' />)

storiesOf('Simple Buttons', module)
  .add("Blue Button", () => <Button label="ACTION"/>)