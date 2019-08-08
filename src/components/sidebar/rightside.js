import React from "react"
import Sidebar from "./sidebar"


class Rightside extends React.Component {
  static displayName = 'Rightside';

  render() {
      return <Sidebar
                whichSide='right'
                isActive={this.props.isActive}
                toggleSidebar={this.props.toggleSidebar}
                header={this.props.header}
                icon={this.props.icon}
              >
                {this.props.children}
              </Sidebar>
  }
}

export default Rightside;