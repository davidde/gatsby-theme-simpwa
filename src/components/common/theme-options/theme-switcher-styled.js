import React from 'react';
import ThemeContext from '../contexts/theme-context';
import StyledSelect from '../selects/styled-select';


function ThemeSwitcherStyled() {
  return (
    <ThemeContext.Consumer>
    {
        ({ theme, changeTheme }) => (
            <form>
                <label>
                  <span>Theme: &nbsp;</span>
                  <StyledSelect
                    name='theme'
                    value={theme}
                    onChange={changeTheme}
                  >
                    <option value='light'>light</option>
                    <option value='dark'>dark</option>
                    <option value='joy'>joy</option>
                  </StyledSelect>
                </label>
            </form>
        )
    }
    </ThemeContext.Consumer>
  );
}


export default ThemeSwitcherStyled;