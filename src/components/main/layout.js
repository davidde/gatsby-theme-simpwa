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
      // We use separate state for portrait and landscape sidebars
      // so that mobile and desktop sidebar activity can be independent
      // of each other for the initial page load:
      leftPortraitActive: false,
      leftLandscapeActive: this.props.leftActive,
      rightPortraitActive: false,
      rightLandscapeActive: this.props.rightActive,
      theme: this.props.theme,
      sidestrip: this.props.sidestrip === 'mobileOff' ? 'on' : this.props.sidestrip,
      isPortrait: null,
      isMediumViewport: null,
    }
  }

  componentDidMount() {
    // 'hasTouchscreen' prevents :hover styles on mobile,
    // and circumvents a desktop linux firefox bug:
    this.hasTouchscreen = window.matchMedia('(hover: none)').matches;
    let isPortrait = window.matchMedia('(orientation: portrait)').matches;
    let isMediumViewport = window.matchMedia(vars.mediumViewport).matches;
    this.setState({ isPortrait, isMediumViewport });

    if (this.hasTouchscreen &&
       (this.props.sidestrip === 'mobileOff' || this.props.sidestrip === 'hidden')) {
        this.setState({ sidestrip: 'off' });
    }

    if (isPortrait) {
      this.setState({
        leftLandscapeActive: false,
        rightLandscapeActive: false,
      });
    } else if (isMediumViewport || this.props.mutex) {
      if (this.state.leftLandscapeActive && this.state.rightLandscapeActive) {
        this.setState({ rightLandscapeActive: false });
      }
    }

    window.addEventListener('resize', this.updateViewports);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateViewports);
  }

  updateViewports = () => {
    let isPortrait = window.matchMedia('(orientation: portrait)').matches;
    let isMediumViewport = window.matchMedia(vars.mediumViewport).matches;

    // When transitioning to/from a portrait viewport:
    if (isPortrait !== this.state.isPortrait) {
      // If the left portrait sidebar is active:
      if (this.state.leftPortraitActive) {
        // Deactivate its portrait mode:
        this.setState({ leftPortraitActive: false });
        if (!isPortrait) { // But when in landscape:
          // Activate its landscape mode:
          this.setState({ leftLandscapeActive: true });
          if (this.state.rightLandscapeActive) { // and deactivate the other side:
            this.setState({ rightLandscapeActive: false });
          }
        }
      }
      if (this.state.rightPortraitActive) { // Same for right side!
        this.setState({ rightPortraitActive: false });
        if (!isPortrait) {
          this.setState({ rightLandscapeActive: true });
          if (this.state.leftLandscapeActive) {
            this.setState({ leftLandscapeActive: false });
          }
        }
      }
    }
    // If both sides are active while transitioning
    // to a medium viewport, unactivate one side:
    if (isMediumViewport !== this.state.isMediumViewport) {
      if ((this.state.leftPortraitActive || this.state.leftLandscapeActive) &&
         (this.state.rightPortraitActive || this.state.rightLandscapeActive) &&
         isMediumViewport) {
              this.setState({
                rightPortraitActive: false,
                rightLandscapeActive: false,
              });
      }
    }

    this.setState({ isPortrait, isMediumViewport });
  }

  toggleLeftSidebar = () => {
    if (this.state.isPortrait) {
      this.setState({leftPortraitActive: !this.state.leftPortraitActive});
      if (this.state.rightPortraitActive) {
        this.setState({ rightPortraitActive: false });
      }
    } else {
      this.setState({leftLandscapeActive: !this.state.leftLandscapeActive});
      if (this.state.rightLandscapeActive &&
         (this.state.isMediumViewport || this.props.mutex)) {
              this.setState({ rightLandscapeActive: false });
      }
    }
  }

  toggleRightSidebar = () => {
    if (this.state.isPortrait) {
      this.setState({rightPortraitActive: !this.state.rightPortraitActive});
      if (this.state.leftPortraitActive) {
        this.setState({ leftPortraitActive: false });
      }
    } else {
      this.setState({rightLandscapeActive: !this.state.rightLandscapeActive});
      if (this.state.leftLandscapeActive &&
         (this.state.isMediumViewport || this.props.mutex)) {
              this.setState({ leftLandscapeActive: false });
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
    if ( this.clientX < (20/100 * window.screen.width) ||
         this.state.leftPortraitActive || this.state.leftLandscapeActive ) {
      if (xDelta > 0) { // Swipe to right:
        if (this.state.isPortrait) {
          this.setState({ leftPortraitActive: true });
        } else {
          this.setState({ leftLandscapeActive: true });
        }
      } else { // Swipe to left:
        this.setState({
          leftPortraitActive: false,
          leftLandscapeActive: false,
        });
      }
    }

    // Right sidebar:
    if ( this.clientX > (80/100 * window.screen.width) ||
         this.state.rightPortraitActive || this.state.rightLandscapeActive ) {
      if (xDelta > 0) { // Swipe to right:
        this.setState({
          rightPortraitActive: false,
          rightLandscapeActive: false,
        });
      } else { // Swipe to left:
        if (this.state.isPortrait) {
          this.setState({ rightPortraitActive: true });
        } else {
          this.setState({ rightLandscapeActive: true });
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
    // For CustomSelect the event argument is no event, but sidestrip state:
    let sidestrip = event.target ? event.target.value : event;
    this.setState({ sidestrip });
  }

  render() {
    let leftPortraitOpen = this.state.leftPortraitActive ? 'portrait-open' : 'portrait-closed';
    let leftLandscapeOpen = this.state.leftLandscapeActive ? 'landscape-open' : 'landscape-closed';
    let rightPortraitOpen = this.state.rightPortraitActive ? 'portrait-open' : 'portrait-closed';
    let rightLandscapeOpen = this.state.rightLandscapeActive ? 'landscape-open' : 'landscape-closed';

    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        if (child.type.displayName === 'Leftside') {
            return React.cloneElement(child, {
                portraitOpen: leftPortraitOpen,
                landscapeOpen: leftLandscapeOpen,
                toggleSidebar: this.toggleLeftSidebar,
                hasTouchscreen: this.hasTouchscreen,
            });
        } else if (child.type.displayName === 'Rightside') {
            return React.cloneElement(child, {
                portraitOpen: rightPortraitOpen,
                landscapeOpen: rightLandscapeOpen,
                toggleSidebar: this.toggleRightSidebar,
                hasTouchscreen: this.hasTouchscreen,
            });
        } else if (child.type.displayName === 'MainView') {
            return React.cloneElement(child, {
                // To change the text offset in the Main header in landscape mode:
                leftLandscapeOpen: 'left-' + leftLandscapeOpen,
                rightLandscapeOpen: 'right-' + rightLandscapeOpen,
                // To change the portrait mock background visibility:
                leftPortraitOpen: 'left-' + leftPortraitOpen,
                rightPortraitOpen: 'right-' + rightPortraitOpen,
                closePortraitSidebars: () => this.setState({
                  leftPortraitActive: false,
                  rightPortraitActive: false,
                }),
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
              className={`${this.state.theme}-theme sidestrip-${this.state.sidestrip}`}
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