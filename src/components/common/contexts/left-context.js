import React from 'react';


const LeftContext = React.createContext({
  portraitOpen: '',
  landscapeOpen: '',
  hasTouchscreen: null,
  toggleSidebar: () => {},
});

export default LeftContext;