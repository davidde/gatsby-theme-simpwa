import React from 'react';
import OuterSidebar from './sidebar-outer';


class Rightside extends React.Component {
  static displayName = 'Rightside';

  render() {
    return <OuterSidebar id='right' {...this.props} />;
  }
}

export default Rightside;