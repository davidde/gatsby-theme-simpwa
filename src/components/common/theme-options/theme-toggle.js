import React from 'react';
import Toggle from '../forms/toggle';


function ThemeToggle() {
  // onChange={event =>
  //   event.target.checked ? 'dark' : 'light'
  // }
  return (
    <>
      <Toggle label='Theme:' />
    </>
  );
}

export default ThemeToggle;