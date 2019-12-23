import React from 'react';


const RightContext = React.createContext({
  portraitOpen: '',
  landscapeOpen: '',
  hasTouchscreen: null,
  style: {},
  toggleSidebar: () => {},
});

export default RightContext;