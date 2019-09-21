import React from 'react';
import ThemeContext from './theme-context';
import CustomSelect from './custom-select';


function ThemeSwitcherDiv() {
  return (
    <ThemeContext.Consumer>
      {
        ({ theme, changeTheme }) => (
            <form>
                <label>
                  <span>Theme: &nbsp;</span>
                  <CustomSelect name='theme' value={theme} onChange={changeTheme} >
                    <option value='light'>light</option>
                    <option value='dark'>dark</option>
                    <option value='joy'>joy</option>
                  </CustomSelect>
                </label>
            </form>
        )
      }
    </ThemeContext.Consumer>
  );
}


export default ThemeSwitcherDiv;