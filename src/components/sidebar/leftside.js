import React from 'react';
import OuterSidebar from './sidebar-outer';


function Leftside(props) {
  return <OuterSidebar id='left' {...props} />;
}

Leftside.displayName = 'Leftside';
export default Leftside;