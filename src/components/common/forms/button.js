import React from 'react';
import './button.scss';


function Button(props) {
  return (
    <button
      {...props}
      className='themed-button'
    />
  );
}

export default Button;