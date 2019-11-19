import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';
import Checkboxes from './Checkboxes'

storiesOf('Text Fields', module)
  .add("Input default", () => <Input size="default"></Input>)
  
storiesOf('Check Boxes', module)
  .add("Blue Check Box", () => <Checkboxes color='blue'/>)


