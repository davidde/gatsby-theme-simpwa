import React from 'react';
import ThemeContext from './theme-context';
import Select from './styled-select';


function ThemeSwitcher() {
  return (
    <ThemeContext.Consumer>
    {
        ({ theme, changeTheme }) => (
            <form>
                <label>
                  <span>Theme: &nbsp;</span>
                  <Select
                    name='theme'
                    value={theme}
                    onChange={changeTheme}
                  >
                    <option value='light'>light</option>
                    <option value='dark'>dark</option>
                    <option value='joy'>joy</option>
                  </Select>
                </label>
            </form>
        )
    }
    </ThemeContext.Consumer>
  );
}


export default ThemeSwitcher;