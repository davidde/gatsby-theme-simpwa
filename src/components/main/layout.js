import React from 'react';
// The following import prevents a FontAwesome Icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent FontAwesome from adding its CSS again, since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

import ThemeContext from '../common/contexts/theme-context';
import SidestripContext from '../common/contexts/sidestrip-context';
import LeftContext from '../common/contexts/left-context';
import RightContext from '../common/contexts/right-context';

import style from './layout.module.scss';


class Layout extends React.Component {
  static defaultProps = {
    leftActive: true,
    rightActive: false,
    mutex: false,
    theme: 'light',
    sidestrip: 'offTouchscreen',
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
      sidestrip: this.props.sidestrip,
      isPortrait: null,
      isMediumViewport: null,
    }
  }

  componentDidMount() {
    // 'hasTouchscreen' prevents :hover styles on mobile,
    // and circumvents a desktop linux firefox bug:
    this.hasTouchscreen = window.matchMedia('(hover: none)').matches;
    let isPortrait = window.matchMedia('(orientation: portrait)').matches;
    let isMediumViewport = window.matchMedia(style.mediumViewport).matches;
    this.setState({ isPortrait, isMediumViewport });

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
    let isMediumViewport = window.matchMedia(style.mediumViewport).matches;

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

  toggleSidebar = (event) => {
    let toggleSide = event.currentTarget ? event.currentTarget.parentNode.id : event;
    let otherSide = toggleSide === 'left' ? 'right' : 'left';

    if (this.state.isPortrait) {
      this.setState({ [toggleSide + 'PortraitActive']: !this.state[toggleSide + 'PortraitActive']});
    } else {
      this.setState({ [toggleSide + 'LandscapeActive']: !this.state[toggleSide + 'LandscapeActive']});
      if (this.state[otherSide + 'LandscapeActive'] &&
         (this.state.isMediumViewport || this.props.mutex)) {
              this.setState({ [otherSide + 'LandscapeActive']: false });
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

  render() { console.log(style);
    return (
      <ThemeContext.Provider value={{
        theme: this.state.theme,
        changeTheme: this.changeTheme,
      }}>
      <SidestripContext.Provider value={{
        sidestrip: this.state.sidestrip === 'offTouchscreen' ?
                  (this.hasTouchscreen ? 'off' : 'on') : this.state.sidestrip,
        changeSidestrip: this.changeSidestrip,
      }}>
      <LeftContext.Provider value={{
        portraitOpen: this.state.leftPortraitActive ? 'PortraitOpen' : 'PortraitClosed',
        landscapeOpen: this.state.leftLandscapeActive ? 'LandscapeOpen' : 'LandscapeClosed',
        hasTouchscreen: this.hasTouchscreen,
        style: style,
        toggleSidebar: this.toggleSidebar,
      }}>
      <RightContext.Provider value={{
        portraitOpen: this.state.rightPortraitActive ? 'PortraitOpen' : 'PortraitClosed',
        landscapeOpen: this.state.rightLandscapeActive ? 'LandscapeOpen' : 'LandscapeClosed',
        hasTouchscreen: this.hasTouchscreen,
        style: style,
        toggleSidebar: this.toggleSidebar,
      }}>

            <div
              id={style.layout}
              className={`${style[this.state.theme + 'Theme']} ${style[this.state.sidestrip + 'Sidestrip']}`}
              onTouchStart={this.handleTouchStart}
              onTouchMove={this.handleTouchMove}
            >

                  {this.props.children}

            </div>

      </RightContext.Provider>
      </LeftContext.Provider>
      </SidestripContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default Layout;