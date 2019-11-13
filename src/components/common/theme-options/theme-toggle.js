import React from 'react';
import Toggle from '../forms/toggle';
import ThemeContext from '../contexts/theme-context';

function ThemeToggle(props) {
  // onChange={event =>
  //   event.target.checked ? 'dark' : 'light'
  // }
  return (
    <ThemeContext.Consumer>
    {
      ({ theme, changeTheme }) => {
        let newTheme, checked;
        if (theme === 'dark') {
          newTheme = 'light';
          checked = true;
        } else {
          newTheme = 'dark';
          checked = false;
        }

        return (
            <Toggle
              label={props.label}
              checked={checked}
              onChange={ () => changeTheme(newTheme) }
              ariaLabel='Switch between Light and Dark mode'
            />
        );
      }
    }
    </ThemeContext.Consumer>
  );
}

export default ThemeToggle;