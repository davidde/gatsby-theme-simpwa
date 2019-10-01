import React from 'react';


const SidestripContext = React.createContext({
  sidestrip: 'on',
  updateSidestrips: () => {},
});

export default SidestripContext;