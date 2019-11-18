import React from 'react';
import ThemeContext from '../common/contexts/theme-context';
import SidestripContext from '../common/contexts/sidestrip-context';
import vars from './layout.scss';


class Layout extends React.Component {
  static defaultProps = {
    leftActive: true,
    rightActive: false,
    mutex: false,
    theme: 'light',
    sidestrip: 'mobileOff',
  }

  constructor(props) {
    super(props);

    this.state = {
      // We use separate state for portrait and landscape sidebars so that mobile and desktop
      // sidebar activity can be independent of each other for the initial page load.
      leftActivePortrait: false,
      leftActiveLandscape: this.props.leftActive,
      rightActivePortrait: false,
      rightActiveLandscape: this.props.rightActive,
      mutex: this.props.mutex,
      theme: this.props.theme,
      sidestrip: this.props.sidestrip,
      // To prevent :hover styles on mobile,
      // and circumvent a desktop linux firefox bug:
      hasTouchscreen: null,
      isPortrait: null,
      isMediumViewport: null,
    }
  }

  componentDidMount() {
    let hasTouchscreen = window.matchMedia('(hover: none)').matches;
    let isPortrait = window.matchMedia('(orientation: portrait)').matches;
    let isMediumViewport = window.matchMedia(vars.mediumViewport).matches;
    let leftActiveLandscape = this.state.leftActiveLandscape;
    let rightActiveLandscape = this.state.rightActiveLandscape;

    if (isPortrait) {
      leftActiveLandscape = false;
      rightActiveLandscape = false;
    } else if (isMediumViewport || this.state.mutex) {
      if (this.state.leftActiveLandscape && rightActiveLandscape) {
        rightActiveLandscape = false;
      }
    }

    this.setState({
      hasTouchscreen,
      isPortrait,
      isMediumViewport,
      leftActiveLandscape,
      rightActiveLandscape,
    });

    window.addEventListener('resize', this.updateViewports);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateViewports);
  }

  updateViewports = () => {
    let isPortrait = window.matchMedia('(orientation: portrait)').matches;
    let isMediumViewport = window.matchMedia(vars.mediumViewport).matches;

    // If either side is active while transitioning to/from a portrait viewport, unactivate both sides:
    if (this.state.isPortrait !== isPortrait) {
      this.setState({ isPortrait });
      if (this.state.leftActivePortrait || this.state.rightActivePortrait
          || this.state.leftActiveLandscape || this.state.rightActiveLandscape) {
        this.setState({
          leftActivePortrait: false,
          leftActiveLandscape: false,
          rightActivePortrait: false,
          rightActiveLandscape: false,
        });
      }
    }
    // If both sides are active while transitioning to a medium viewport, unactivate one side:
    if (this.state.isMediumViewport !== isMediumViewport) {
      this.setState({ isMediumViewport });
      if ((this.state.leftActivePortrait || this.state.rightActivePortrait) &&
          (this.state.leftActiveLandscape || this.state.rightActiveLandscape) &&
          isMediumViewport) {
              this.setState({
                rightActivePortrait: false,
                rightActiveLandscape: false,
              });
      }
    }
  }

  toggleLeftSidebar = () => {
    if (this.state.isPortrait) {
      this.setState({leftActivePortrait: !this.state.leftActivePortrait});
      if (this.state.rightActivePortrait) {
        this.setState({ rightActivePortrait: false });
      }
    } else {
      this.setState({leftActiveLandscape: !this.state.leftActiveLandscape});
      if (this.state.rightActiveLandscape && (this.state.isMediumViewport || this.state.mutex)) {
        this.setState({ rightActiveLandscape: false });
      }
    }
  }

  toggleRightSidebar = () => {
    if (this.state.isPortrait) {
      this.setState({rightActivePortrait: !this.state.rightActivePortrait});
      if (this.state.leftActivePortrait) {
        this.setState({ leftActivePortrait: false });
      }
    } else {
      this.setState({rightActiveLandscape: !this.state.rightActiveLandscape});
      if (this.state.leftActiveLandscape && (this.state.isMediumViewport || this.state.mutex)) {
        this.setState({ leftActiveLandscape: false });
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
        if (this.state.isPortrait) {
          this.setState({ leftActivePortrait: true });
        } else {
          this.setState({ leftActiveLandscape: true });
        }
      } else { // Swipe to left:
        this.setState({
          leftActivePortrait: false,
          leftActiveLandscape: false,
        });
      }
    }

    // Right sidebar:
    if ( this.clientX > (80/100 * window.screen.width) || this.state.rightActive ) {
      if (xDelta > 0) { // Swipe to right:
        this.setState({
          rightActivePortrait: false,
          rightActiveLandscape: false,
        });
      } else { // Swipe to left:
        if (this.state.isPortrait) {
          this.setState({ rightActivePortrait: true });
        } else {
          this.setState({ rightActiveLandscape: true });
        }
      }
    }

    event.preventDefault();
  }

  changeTheme = (event) => {
    // For CustomSelect the event argument is no event, but the theme name:
    let theme = event.target ? event.target.value : event;
    this.setState({ theme });
  }

  changeSidestrip = (event) => {
    // For CustomSelect the event argument is no event, but the state of sidestrip:
    let sidestrip = event.target ? event.target.value : event;
    this.setState({ sidestrip });
  }

  render() {
    console.log('leftActivePortrait = ', this.state.leftActivePortrait);
    console.log('leftActiveLandscape = ', this.state.leftActiveLandscape);
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        if (child.type.displayName === 'Leftside') {
            return React.cloneElement(child, {
                isActivePortrait: this.state.leftActivePortrait,
                isActiveLandscape: this.state.leftActiveLandscape,
                toggleSidebar: this.toggleLeftSidebar,
                hasTouchscreen: this.state.hasTouchscreen,
            });
        } else if (child.type.displayName === 'Rightside') {
            return React.cloneElement(child, {
                isActivePortrait: this.state.rightActivePortrait,
                isActiveLandscape: this.state.rightActiveLandscape,
                toggleSidebar: this.toggleRightSidebar,
                hasTouchscreen: this.state.hasTouchscreen,
            });
        } else if (child.type.displayName === 'MainView') {
            return React.cloneElement(child, {
                // These props are used to change the text offset in the Main header:
                leftActive: this.state.leftActiveLandscape,
                rightActive: this.state.rightActiveLandscape,
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
              className={this.state.theme + 'Theme'}
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