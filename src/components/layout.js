import React from "react"


class Layout extends React.Component {
  constructor(props) {
    super(props);
    
    let theme = this.props.theme;
    if (!theme) {
      theme = 'joy';
    }
    this.vars = require('./themes/theme-' + theme + '.scss');
    this.clientX = null;
    this.clientY = null;

    this.state = {
      leftActive: false,
      rightActive: false,
      isMediumViewport: null,
    }
    if (typeof window !== 'undefined') {
      this.isMediumViewport();
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.isMediumViewport);
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.isMediumViewport);
  }

  isMediumViewport = () => {
    let isMediumViewport = window.matchMedia(this.vars.mediumWidthQuery).matches;

    // Init in constructor:
    if (this.state.isMediumViewport === null) {
      // eslint-disable-next-line
      this.state.isMediumViewport = isMediumViewport;
    } // In event listener (on window resize); update state if necessary:
    else if (this.state.isMediumViewport !== isMediumViewport) {
      this.setState({ isMediumViewport });
    }
    // If both sides are active in medium viewport, unactivate one side:
    if (this.state.leftActive && this.state.rightActive && isMediumViewport) {
      this.setState({ rightActive: false });
    }
  }

  toggleLeftSidebar = () => {
    this.setState({leftActive: !this.state.leftActive});

    // If other side is active in medium viewport, unactivate other side:
    if (this.state.rightActive && this.state.isMediumViewport) {
      this.setState({ rightActive: false });
    }
  }

  toggleRightSidebar = () => {
    this.setState({rightActive: !this.state.rightActive});

    // If other side is active in medium viewport, unactivate other side:
    if (this.state.leftActive && this.state.isMediumViewport) {
      this.setState({ leftActive: false });
    }
  }

  handleTouchStart = (event) => {
    // 'touches' returns a list of all the touch objects
    // that are currently in contact with the surface;
    // touches[0] indicates that it will only show the
    // coordinates of one finger (the first).
    this.clientX = event.touches[0].clientX;
    // 'clientX' returns the X coordinate of the touch point
    // relative to the left edge of the browser viewport in pixels,
    // not including any scroll offset.
    this.clientY = event.touches[0].clientY;
    // 'clientY' returns the Y coordinate of the touch point
    // relative to the top edge of the browser viewport in pixels,
    // not including any scroll offset.
  }

  handleTouchEnd = (event) => {
    // 'changedTouches' returns a list of all the touch objects
    // that were removed from the surface in a touchEnd event:
    let xDelta = event.changedTouches[0].clientX - this.clientX;
    let yDelta = event.changedTouches[0].clientY - this.clientY;

    if ( Math.abs(xDelta) <= Math.abs(yDelta) ) {
      return;
    }

    // Left sidebar:
    if ( this.clientX < (20/100 * window.screen.width) || this.state.leftActive ) {
      if (xDelta > 0) { // Swipe to right:
        this.setState({ leftActive: true });
      } else { // Swipe to left:
        this.setState({ leftActive: false });
      }
    }

    // Right sidebar:
    if ( this.clientX > (80/100 * window.screen.width) || this.state.rightActive ) {
      if (xDelta > 0) { // Swipe to right:
        this.setState({ rightActive: false });
      } else { // Swipe to left:
        this.setState({ rightActive: true });
      }
    }
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        if (child.type.name === 'Leftside') {
            return React.cloneElement(child, {
                isActive: this.state.leftActive,
                toggleSidebar: this.toggleLeftSidebar,
            });
        } else if (child.type.name === 'Rightside') {
            return React.cloneElement(child, {
              isActive: this.state.rightActive,
              toggleSidebar: this.toggleRightSidebar,
            });
        } else if (child.type.name === 'Main') {
          return React.cloneElement(child, {
            leftActive: this.state.leftActive,
            rightActive: this.state.rightActive,
          });
        } // else return child;
      }
    );

    return (
      <div
        id='layout'
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
      >

        {childrenWithProps}

      </div>
    )
  }
}

export default Layout;