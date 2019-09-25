import React from 'react';
import ThemeContext from './common/theme-context';
import vars from '../styles/style.scss';


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.clientX = null;
    this.clientY = null;

    this.state = {
      leftActive: false,
      rightActive: false,
      // Theme: light, dark or joy
      theme: this.props.theme ? this.props.theme : 'light',
      // Sidestrip: on, off or hidden
      sidestrip: this.props.sidestrip ? this.props.sidestrip : 'on',
      canHover: null,
    }
  }

  componentDidMount() {
    this.isPortrait = window.matchMedia(vars.portraitQuery).matches;
    this.isMediumViewport = window.matchMedia(vars.mediumWidthQuery).matches;
    // Prevents mobile hover effects and fixes a desktop linux firefox bug:
    let canHover = !window.matchMedia('(hover: none)').matches;
    this.setState({ canHover });

    if (!this.isPortrait) {
      if (vars.startActive === 'left') {
        this.setState({ leftActive: true });
      }
      else if (vars.startActive === 'right') {
        this.setState({ rightActive: true });
      }
      else if (vars.startActive === 'both') {
        // In medium viewport or when mutex is set, only activate one side:
        if (this.isMediumViewport || vars.mutex === 'true') {
          this.setState({ leftActive: true });
        } else { // Otherwise activate both:
          this.setState({ leftActive: true });
          this.setState({ rightActive: true });
        }
      }
    }

    if (this.state.sidestrip !== 'on') {
      this.updateSidestrips();
    }

    document.body.classList.add(this.state.theme + 'Theme');
    window.addEventListener('resize', this.updateViewports);
  }
  componentWillUnmount() {
      window.removeEventListener('resize', this.updateViewports);
  }

  updateViewports = () => {
    let wasPortrait = this.isPortrait;
    this.isPortrait = window.matchMedia(vars.portraitQuery).matches;
    this.isMediumViewport = window.matchMedia(vars.mediumWidthQuery).matches;

    // If either side is active while transitioning to a portrait viewport, unactivate both sides:
    if (wasPortrait !== this.isPortrait) {
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
      if (this.isMediumViewport || vars.mutex === 'true') {
        this.setState({ rightActive: false });
      }
    }
  }

  toggleRightSidebar = () => {
    this.setState({rightActive: !this.state.rightActive});

    // If other side is active in medium viewport or when mutex is set, unactivate other side:
    if (this.state.leftActive) {
      if (this.isMediumViewport || vars.mutex === 'true') {
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

  changeTheme = (event) => {
    // For DivSelect the event argument is no event, but the theme name:
    let theme = event.target ? event.target.value : event;
    document.body.classList.remove(this.state.theme + 'Theme');
    document.body.classList.add(theme + 'Theme');
    this.setState({ theme });
  }

  updateSidestrips = () => {
    if (this.state.sidestrip === 'hidden') {
      let sidestrips = document.getElementsByClassName('sidestrip');
      let sidestripPatches = document.getElementsByClassName('sidestripPatch');
      let bodyColor = getComputedStyle(document.body).backgroundColor;
      for (let i = 0; i < sidestrips.length; i++) {
        // Turn off sidestripPatch:
        sidestripPatches[i].style.background = 'transparent';
        // Blend sidestrip with background:
        sidestrips[i].style.backgroundColor = bodyColor;
        sidestrips[i].style.borderColor = bodyColor;
        sidestrips[i].style.boxShadow = 'none';
      }
    } else if (this.state.sidestrip === 'off') {
      document.body.style.setProperty('--sidestripWidth', 0 + 'rem');
      // Borders remain visible unless explicitly zero'd:
      document.body.style.setProperty('--sidestripBorderWidth', 0 + 'rem');
    }
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        if (child.type.displayName === 'Leftside') {
            return React.cloneElement(child, {
                isActive: this.state.leftActive,
                toggleSidebar: this.toggleLeftSidebar,
                canHover: this.state.canHover,
            });
        } else if (child.type.displayName === 'Rightside') {
            return React.cloneElement(child, {
              isActive: this.state.rightActive,
              toggleSidebar: this.toggleRightSidebar,
              canHover: this.state.canHover,
            });
        } else if (child.type.displayName === 'MainView') {
          return React.cloneElement(child, {
            // These props are used to change the text offset in the Main header:
            leftActive: this.state.leftActive && !this.isPortrait,
            rightActive: this.state.rightActive && !this.isPortrait,
          });
        } // else return child;
      }
    );

    let themeProvider = {
      theme: this.state.theme,
      changeTheme: this.changeTheme,
    }

    if (this.state.sidestrip !== 'on') {
      this.updateSidestrips();
    }

    return (
      <ThemeContext.Provider value={themeProvider}>
        <div
          id='layout'
          onTouchStart={this.handleTouchStart}
          onTouchEnd={this.handleTouchEnd}
        >

          {childrenWithProps}

        </div>
      </ThemeContext.Provider>
    )
  }
}

export default Layout;