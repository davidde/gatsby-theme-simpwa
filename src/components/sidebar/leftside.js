import React from "react"
import Sidebar from "./sidebar"


class Leftside extends React.Component {
  static displayName = 'Leftside';

  render() {
      return <Sidebar
                whichSide='left'
                {...this.props}
              >
                {this.props.children}
              </Sidebar>
  }
}

export default Leftside;