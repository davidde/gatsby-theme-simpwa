import React from "react"
import Sidebar from "./sidebar"


class Leftside extends React.Component {
  static displayName = 'Leftside';

  render() {
      return <Sidebar
                whichSide='left'
                isActive={this.props.isActive}
                toggleSidebar={this.props.toggleSidebar}
                title={this.props.title}
                icon={this.props.icon}
              >
                {this.props.children}
              </Sidebar>
  }
}

export default Leftside;