import React from 'react';
import ThemeContext from '../contexts/theme-context';


function ThemeSwitcher(props) {
  let SelectTag = 'select';
  if (props.select === 'custom' || props.select === 'styled') {
    SelectTag = require('../forms/' + props.select + '-select.js').default;
  }

  return (
    <ThemeContext.Consumer>
    {
        ({ theme, changeTheme }) => (
            <form style={{margin: '1em 0'}}>
                <label>
                  <span>Theme: &nbsp;</span>
                  <SelectTag
                    name='theme'
                    value={theme}
                    onChange={changeTheme}
                    width='6.0675em'
                  >
                    <option value='light'>light</option>
                    <option value='dark'>dark</option>
                    <option value='joy'>joy</option>
                  </SelectTag>
                </label>
            </form>
        )
    }
    </ThemeContext.Consumer>
  );
}


export default ThemeSwitcher;