import React from "react"


class Layout extends React.Component {
  constructor(props) {
    super(props);
    
    let theme = this.props.theme;
    if (!theme) {
      theme = 'joy';
    }
    require('./themes/theme-' + theme + '.scss');

    this.state = {
      leftRef: null,
      rightRef: null,
    }
  }

  setLeft = element => this.setState({ leftRef: element });
  setRight = element => this.setState({ rightRef: element });

  render() {
    const childrenWithRefs = React.Children.map(this.props.children,
      (child) => {
        if (child.type.displayName === 'Leftside') {
            return React.cloneElement(child, {
                myRef: this.setLeft,
                otherRef: this.state.rightRef,
            });
        } else if (child.type.displayName === 'Rightside') {
            return React.cloneElement(child, {
                myRef: this.setRight,
                otherRef: this.state.leftRef,
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