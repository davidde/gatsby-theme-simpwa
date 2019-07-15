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
      leftActive: false,
      rightActive: false,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.mediumViewportListener);
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.mediumViewportListener);
  }

  mediumViewportListener = () => {
    // If both sides are active in medium viewport, unactivate one side:
    if ( this.state.leftActive && this.state.rightActive && this.isMediumViewport() ) {
      this.setState({ rightActive: false });
    }
  }

  isMediumViewport = () => {
    let mediumWidthQuery = getComputedStyle(document.documentElement).getPropertyValue('--mediumWidthQuery');
    let isMedium = window.matchMedia(mediumWidthQuery).matches;
    // console.log('isMedium = ', isMedium);
    return isMedium;
  }

  toggleLeftSidebar = () => {
    this.setState({leftActive: !this.state.leftActive});

    // If other side is active in medium viewport, unactivate other side:
    if ( this.state.rightActive && this.isMediumViewport() ) {
      this.setState({ rightActive: false });
    }
  }

  toggleRightSidebar = () => {
    this.setState({rightActive: !this.state.rightActive});

    // If other side is active in medium viewport, unactivate other side:
    if ( this.state.leftActive && this.isMediumViewport() ) {
      this.setState({ leftActive: false });
    }
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        if (child.type.displayName === 'Leftside') {
            return React.cloneElement(child, {
                isActive: this.state.leftActive,
                toggleSidebar: this.toggleLeftSidebar,
            });
        } else if (child.type.displayName === 'Rightside') {
            return React.cloneElement(child, {
              isActive: this.state.rightActive,
              toggleSidebar: this.toggleRightSidebar,
            });
        } else {
          return child;
        }
      }
    );

    return (
      <div id='layout'>

        {childrenWithProps}

      </div>
    )
  }
}

export default Layout;