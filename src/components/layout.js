import React from 'react';
import ThemeContext from './common/theme-context';
import SidestripContext from './common/sidestrip-context';
import vars from '../styles/style.scss';


class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftActive: false,
      rightActive: false,
      // Theme: light, dark or joy
      theme: this.props.theme ? this.props.theme : 'light',
      // Sidestrip: on, off or hidden
      sidestrip: this.props.sidestrip ? this.props.sidestrip : 'on',
      // To prevent :hover styles on touchscreens,
      // and circumvent a desktop linux firefox bug:
      touchscreen: null,
      isPortrait: null,
      isMediumViewport: null,
    }
  }

  componentDidMount() {
    let isPortrait = window.matchMedia(vars.portraitQuery).matches;
    let isMediumViewport = window.matchMedia(vars.mediumWidthQuery).matches;
    let touchscreen = window.matchMedia('(hover: none)').matches;
    this.setState({ isPortrait, isMediumViewport, touchscreen });

    if (!isPortrait) {
      if (vars.startActive === 'left') {
        this.setState({ leftActive: true });
      }
      else if (vars.startActive === 'right') {
        this.setState({ rightActive: true });
      }
      else if (vars.startActive === 'both') {
        // In medium viewport or when mutex is set, only activate one side:
        if (isMediumViewport || vars.mutex === 'true') {
          this.setState({ leftActive: true });
        } else { // Otherwise activate both:
          this.setState({ leftActive: true });
          this.setState({ rightActive: true });
        }
      }
    }

    document.body.classList.add(this.state.theme + 'Theme');
    window.addEventListener('resize', this.updateViewports);
  }
  componentWillUnmount() {
      window.removeEventListener('resize', this.updateViewports);
  }

  updateViewports = () => {
    let isPortrait = window.matchMedia(vars.portraitQuery).matches;
    let isMediumViewport = window.matchMedia(vars.mediumWidthQuery).matches;

    // If either side is active while transitioning to/from a portrait viewport, unactivate both sides:
    if (this.state.isPortrait !== isPortrait) {
      this.setState({ isPortrait });
      if (this.state.leftActive || this.state.rightActive) {
        this.setState({
          leftActive: false,
          rightActive: false
        });
      }
    }
    // If both sides are active while transitioning to a medium viewport, unactivate one side:
    if (this.state.isMediumViewport !== isMediumViewport) {
      this.setState({ isMediumViewport });
      if (this.state.leftActive && this.state.rightActive && isMediumViewport) {
        this.setState({ rightActive: false });
      }
    }
  }

  toggleLeftSidebar = () => {
    this.setState({leftActive: !this.state.leftActive});

    // If other side is active in medium viewport or when mutex is set, unactivate other side:
    if (this.state.rightActive) {
      if (this.state.isMediumViewport || vars.mutex === 'true') {
        this.setState({ rightActive: false });
      }
    }
  }

  toggleRightSidebar = () => {
    this.setState({rightActive: !this.state.rightActive});

    // If other side is active in medium viewport or when mutex is set, unactivate other side:
    if (this.state.leftActive) {
      if (this.state.isMediumViewport || vars.mutex === 'true') {
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

  handleTouchMove = (event) => {
    let xDelta = event.touches[0].clientX - this.clientX;
    let yDelta = event.touches[0].clientY - this.clientY;

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

    event.preventDefault();
  }

  changeTheme = (event) => {
    // For CustomSelect the event argument is no event, but the theme name:
    let theme = event.target ? event.target.value : event;
    document.body.classList.remove(this.state.theme + 'Theme');
    document.body.classList.add(theme + 'Theme');
    this.setState({ theme });
  }

  changeSidestrip = (event) => {
    // For CustomSelect the event argument is no event, but the state of sidestrip:
    let sidestrip = event.target ? event.target.value : event;
    this.setState({ sidestrip });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        if (child.type.displayName === 'Leftside') {
            return React.cloneElement(child, {
                isActive: this.state.leftActive,
                toggleSidebar: this.toggleLeftSidebar,
                touchscreen: this.state.touchscreen,
            });
        } else if (child.type.displayName === 'Rightside') {
            return React.cloneElement(child, {
                isActive: this.state.rightActive,
                toggleSidebar: this.toggleRightSidebar,
                touchscreen: this.state.touchscreen,
            });
        } else if (child.type.displayName === 'MainView') {
            return React.cloneElement(child, {
                // These props are used to change the text offset in the Main header:
                leftActive: this.state.leftActive && !this.state.isPortrait,
                rightActive: this.state.rightActive && !this.state.isPortrait,
            });
        } // else return child;
      }
    );

    return (
      <ThemeContext.Provider value={{
        theme: this.state.theme,
        changeTheme: this.changeTheme,
      }}>
        <SidestripContext.Provider value={{
          sidestrip: this.state.sidestrip,
          changeSidestrip: this.changeSidestrip,
        }}>
            <div
              id='layout'
              onTouchStart={this.handleTouchStart}
              onTouchMove={this.handleTouchMove}
            >

              {childrenWithProps}

            </div>
        </SidestripContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default Layout;