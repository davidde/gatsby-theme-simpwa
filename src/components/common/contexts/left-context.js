import React from 'react';


const LeftContext = React.createContext({
  portraitOpen: '',
  landscapeOpen: '',
  hasTouchscreen: null,
  style: {},
  toggleSidebar: () => {},
});

export default LeftContext;