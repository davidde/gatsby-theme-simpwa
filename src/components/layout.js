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

    this.leftRef = null;
    this.rightRef = null;

    this.setLeft = element => this.leftRef = element;
    this.setRight = element => this.rightRef = element;
  }

  render() {
    const childrenWithRefs = React.Children.map(this.props.children,
      (child) => {
        if (child.type === Leftside) {
          return React.cloneElement(child, {
            myRef: this.setLeft,
            otherRef: this.rightRef,
          });
        } else if (child.type === Rightside) {
          return React.cloneElement(child, {
            myRef: this.setRight,
            otherRef: this.leftRef,
          });
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