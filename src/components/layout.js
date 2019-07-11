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
  }

  render() {
    const childrenWithRefs = React.Children.map(this.props.children,
      (child) => {
        if (child.displayName === Leftside.displayName) {
          console.log('leftRef = ', this.leftRef);
          return React.cloneElement(child, {
            myRef: element => this.leftRef = element,
            otherRef: this.rightRef,
          });
        } else if (child.displayName === Rightside.displayName) {
          return React.cloneElement(child, {
            myRef: element => this.rightRef = element,
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