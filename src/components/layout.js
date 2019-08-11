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
    }
    // Prevent the browser global 'window' from being referenced while building (= build error):
    if (typeof window !== 'undefined') {
      this.isSmallViewport = window.matchMedia(this.vars.smallWidthQuery).matches;
      this.isMediumViewport = window.matchMedia(this.vars.mediumWidthQuery).matches;
    }

    if (!this.isSmallViewport) {
      if (this.props.startActive === 'left') {
        this.state.leftActive = true;
      }
      else if (this.props.startActive === 'right') {
        this.state.rightActive = true;
      }
      else if (this.props.startActive === 'both') {
        this.state.leftActive = true;
        this.state.rightActive = true;
      }
      // If both sides are active in medium viewport or when mutex is set, unactivate one side:
      if (this.state.leftActive && this.state.rightActive) {
        if (this.isMediumViewport || this.props.mutex) {
          this.state.rightActive = false;
        }
      }
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateViewports);
  }
  componentWillUnmount() {
      window.removeEventListener('resize', this.updateViewports);
  }

  updateViewports = () => {
    let wasSmall = this.isSmallViewport;
    this.isSmallViewport = window.matchMedia(this.vars.smallWidthQuery).matches;
    this.isMediumViewport = window.matchMedia(this.vars.mediumWidthQuery).matches;

    // If either side is active while transitioning to a small viewport, unactivate both sides:
    if (!wasSmall && this.isSmallViewport) {
      if (this.state.leftActive || this.state.rightActive) {
        this.setState({
          leftActive: false,
          rightActive: false
        });
      }
    }
    // If both sides are active while transitioning to a medium viewport, unactivate one side:
    if (this.state.leftActive && this.state.rightActive) {
      if (this.isMediumViewport) {
        this.setState({ rightActive: false });
      }
    }
  }

  toggleLeftSidebar = () => {
    this.setState({leftActive: !this.state.leftActive});

    // If other side is active in medium viewport or when mutex is set, unactivate other side:
    if (this.state.rightActive) {
      if (this.isMediumViewport || this.props.mutex) {
        this.setState({ rightActive: false });
      }
    }
  }

  toggleRightSidebar = () => {
    this.setState({rightActive: !this.state.rightActive});

    // If other side is active in medium viewport or when mutex is set, unactivate other side:
    if (this.state.leftActive) {
      if (this.isMediumViewport || this.props.mutex) {
        this.setState({ leftActive: false });
      }
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
        } else if (child.type.displayName === 'Main') {
          return React.cloneElement(child, {
            // These props are used to change the text offset in the Main header:
            leftActive: this.state.leftActive && !this.isSmallViewport,
            rightActive: this.state.rightActive && !this.isSmallViewport,
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