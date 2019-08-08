import React from "react"
import Sidebar from "./sidebar"


class Leftside extends React.Component {
  static displayName = 'Leftside';

  render() {
      return <Sidebar
                whichSide='left'
                isActive={this.props.isActive}
                toggleSidebar={this.props.toggleSidebar}
                header={this.props.header}
                icon={this.props.icon}
              >
                {this.props.children}
              </Sidebar>
  }
}

export default Leftside;