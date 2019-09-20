import React from 'react';
import './css-select.scss';


function Select(props) {
  return (
    <select className='css-select' {...props} >
      {props.children}
    </select>
  );
}


export default Select;