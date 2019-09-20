import React from 'react';
import ThemeContext from './theme-context';
import DivSelect from './div-select';


function ThemeSwitcherDiv() {
  return (
    <ThemeContext.Consumer>
      {
        ({ theme, changeTheme }) => (
            <form>
                <label>
                  <span>Theme: &nbsp;</span>
                  <DivSelect name='theme' value={theme} onChange={changeTheme} >
                    <option value='light'>light</option>
                    <option value='dark'>dark</option>
                    <option value='joy'>joy</option>
                  </DivSelect>
                </label>
            </form>
        )
      }
    </ThemeContext.Consumer>
  );
}


export default ThemeSwitcherDiv;