import React from "react"

import Sidebar from "./sidebar"


class Leftside extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return React.forwardRef((props, ref) => (
      <Sidebar
        whichSide='left'
        ref={ref}
        otherRef={props.otherRef}
        title={props.title}
        icon={props.icon}
      >
        {props.children}
      </Sidebar>
    ));
  }
}

export default Leftside;