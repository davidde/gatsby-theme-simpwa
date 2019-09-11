import React from 'react';


const ThemeContext = React.createContext({
  theme: 'light',
  changeTheme: () => {},
});

export default ThemeContext;