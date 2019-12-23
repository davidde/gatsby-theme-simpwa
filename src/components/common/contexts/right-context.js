import React from 'react';


const RightContext = React.createContext({
  portraitOpen: '',
  landscapeOpen: '',
  hasTouchscreen: null,
  toggleSidebar: () => {},
});

export default RightContext;