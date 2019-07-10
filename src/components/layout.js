import React from "react"

import Leftside from './sidebar/leftside'
import Rightside from './sidebar/rightside'


class Layout extends React.Component {
  constructor(props) {
    super(props);
    
    let theme = this.props.theme;
    if (!theme) {
      theme = 'joy';
    }
    require('./themes/theme-' + theme + '.scss');

    this.leftRef = React.createRef();
    this.rightRef = React.createRef();
  }

  render() {
    const childrenWithRefs = React.Children.map(this.props.children,
      (child) => {
        if (child.type === Leftside) {
          return React.cloneElement(child, { ref: this.leftRef, otherRef: this.rightRef });
        } else if (child.type === Rightside) {
          return React.cloneElement(child, { ref: this.rightRef, otherRef: this.leftRef });
        } else {
          return child;
        }
      }
    );

    return (
      <div id='layout'>

        {childrenWithRefs}

      </div>
    )
  }
}

export default Layout;