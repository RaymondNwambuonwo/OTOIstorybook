import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';


////NEEED TO MAKE DEFAULT TYPELESS!!
////OUTLINES NEED TO BE PASSED IN AS PROPS
storiesOf('Buttons', module)
  .add('New', () => <Button label="New EVENT" type="new"/>)
  .add('Delete', () => <Button label="Delete" type="delete"/>)
  .add('Edit', () => <Button label="Edit" type="edit"/>)
  .add('Save', () => <Button label="Save ITEM" type="save"/>)