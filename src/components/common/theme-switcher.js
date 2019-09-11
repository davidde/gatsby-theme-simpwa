import React from 'react';
import ThemeContext from './theme-context';


function ThemeSwitcher() {
  return (
    <ThemeContext.Consumer>
      {
        ({ theme, changeTheme }) => (
            <form>
                <label>Theme: &nbsp;
                  <select name='theme' value={theme} onChange={changeTheme} >
                    <option value='light'>light</option>
                    <option value='dark'>dark</option>
                    <option value='joy'>joy</option>
                  </select>
                </label>
            </form>
        )
      }
    </ThemeContext.Consumer>
  );
}


export default ThemeSwitcher;