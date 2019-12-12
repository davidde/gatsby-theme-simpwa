import React from 'react';
import OuterSidebar from './sidebar-outer';


class Leftside extends React.Component {
  static displayName = 'Leftside';

  render() {
    return <OuterSidebar id='left' {...this.props} />;
  }
}

export default Leftside;