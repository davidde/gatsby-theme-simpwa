import React from 'react';
import './toggle.scss';


function Toggle(props) { // props.label, props.value, props.onChange
  return (
    <label className='custom-toggle'>
        { props.label ? <span className='toggle-label'>{props.label}</span> : '' }
        <div className='toggle-track'>
          <input
            className='hidden-native-checkbox'
            type='checkbox'
            aria-label='Switch between Light and Dark mode'
          />
          <span className='toggle-thumb' />
        </div>
    </label>
  );
};

export default Toggle;