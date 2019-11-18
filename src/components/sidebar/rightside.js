import React from 'react';
import Sidebar from './sidebar';


class Rightside extends React.Component {
  static displayName = 'Rightside';

  render() {
    return (
      <Sidebar
        whichSide='right'
        {...this.props}
      />
    );
  }
}

export default Rightside;