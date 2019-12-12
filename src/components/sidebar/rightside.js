import React from 'react';
import OuterSidebar from './sidebar-outer';


function Rightside(props) {
  return <OuterSidebar id='right' {...props} />;
}

Rightside.displayName = 'Rightside';
export default Rightside;