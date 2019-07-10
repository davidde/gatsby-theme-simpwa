import React from "react"

import Sidebar from "./sidebar"


class Leftside extends React.Component {

  render() {
    return (
      <Sidebar whichSide='left' title={this.props.title} icon={this.props.icon} >
        {this.props.children}
      </Sidebar>
    );
  }
}

export default Leftside;