import React from 'react';
import './toggle.scss';

function Toggle(props) { // props.value, props.onChange
  return (
    <label className='toggle-track'>
        <input
          className='toggle-checkbox'
          type='checkbox'
          aria-label='Switch between Dark and Light mode'
        />
        <span className='toggle-thumb' />
    </label>
  );
};

export default Toggle;