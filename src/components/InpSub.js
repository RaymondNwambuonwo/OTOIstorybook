import React from 'react';
import './InpSub.css'

const InpSub = (props) => {
  let classList = ''
  let types = ['new', 'delete', 'edit', 'save']
  
  if (types.includes(props.type)) {
    classList += ` input_butt-${props.type}`
  }

  return (
    <input value={props.label} type="submit" className={classList}>
      
    </input>
  )
}

export default InpSub;