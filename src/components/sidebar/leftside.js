import React from "react"

import Sidebar from "./sidebar"


class Leftside extends React.Component {
  // constructor(props) {
  //   super(props);
    
  // }

  render() {          console.log('ref = ', this.props.myRef);
    return <Sidebar
        whichSide='left'
        ref={this.props.myRef}
        otherRef={this.props.otherRef}
        title={this.props.title}
        icon={this.props.icon}
      >
        {this.props.children}
      </Sidebar>
    
  }
}

export default Leftside;