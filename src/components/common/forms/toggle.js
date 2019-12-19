import React from 'react';
import './toggle.scss';


function Toggle(props) {
  return (
    <label className='custom-toggle'>
        { props.label ? <span className='toggle-label'>{props.label}</span> : '' }
        <div className='toggle-track'>
          <input
            className='hidden-native-checkbox'
            type='checkbox'
            checked={props.checked}
            onChange={props.onChange}
            aria-label={props.ariaLabel}
          />
          <span className='toggle-thumb' />
        </div>
    </label>
  );
}

export default Toggle;