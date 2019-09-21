import React from 'react';
import './css-select.scss';


/// The one big problem with styled native selects is that it
/// is impossible to get rid of the blue hover color on its options.
/// As a result, styling the select global background-color is not really
/// worth it because most colors will clash with this blue hover color ...
function Select(props) {
  return (
    <select className='css-select' {...props} >
      {props.children}
    </select>
  );
}


export default Select;