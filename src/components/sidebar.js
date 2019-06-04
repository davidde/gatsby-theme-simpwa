import React from "react"
import { css } from "@emotion/core"
import { sidebar } from "../constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hoverbar from "./hoverbar"

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      portraitActive: false, // Sidebar is active in portrait orientation (inactive by default in portrait)
      landscapePassive: false, // Sidebar is inactive in landscape orientation (active by default in landscape)
    };
  }

  toggleSidebar = () => {
    this.setState({isActive: !this.state.isActive});
  }

  render() {
    let widthStr = this.props.whichSide === 'left' ? sidebar.left.width + 'rem' : sidebar.right.width + 'rem';
    let icon = this.props.whichSide === 'left' ? sidebar.left.icon : sidebar.right.icon;
    let otherSide = this.props.whichSide === 'left' ? 'right' : 'left';
    let transitionDuration = this.props.whichSide === 'left' ? sidebar.left.duration : sidebar.right.duration;
    
    let backgroundColor = this.props.whichSide === 'left' ?
          sidebar.left.color.background : sidebar.right.color.background;
    let backgroundHoverColor = this.props.whichSide === 'left' ?
          sidebar.left.color.backgroundHover : sidebar.right.color.backgroundHover;
    let iconColor = this.props.whichSide === 'left' ?
          sidebar.left.color.icon : sidebar.right.color.icon;
    let iconHoverColor = this.props.whichSide === 'left' ?
          sidebar.left.color.iconHover : sidebar.right.color.iconHover;
    let borderColor = this.props.whichSide === 'left' ?
          sidebar.left.color.border : sidebar.right.color.border;
    let borderHoverColor = this.props.whichSide === 'left' ?
          sidebar.left.color.borderHover : sidebar.right.color.borderHover;

    let iconId = 'icon-' + this.props.whichSide;
    let squareId = 'square-' + this.props.whichSide;
    let stripId = 'strip-' + this.props.whichSide;

    let isActive = this.state.isActive ? 0 : '-90vw' ;

    return (
      <div css={css`
              grid-area: ${this.props.whichSide + 'side'};
              height: 100%;
              width: ${this.state.isActive ? '30vw' : widthStr };
              /* width: 30vw; */
              ${this.props.whichSide}:
                ${this.state.isActive ? 0 : '-90vw' };
              transition: ${this.props.whichSide} 0.7s, width 0.7s;
              /* cubic-bezier(0.7, 0.1, 0.4, 1); */
      `}>
        <Hoverbar whichSide={this.props.whichSide} onClick={this.toggleSidebar} isActive={this.state.isActive} />

        {/* Content of the sidebar: */}
        <div css={css`
              height: 100vh;
              width: inherit;
              /* z-index: 5; */
              background: ${backgroundColor};
              ${'border-' + otherSide + ': 2px solid ' + borderColor};
              /* box-shadow: 0px 2px 0px 2px ${borderColor}; */
              /* overflow: hidden; */
              position: fixed;
              top: 0;
              
              

        `}>
          <div css={css`
              height: 4rem;
              border-bottom: 2px solid ${borderColor};
              /* position: fixed;top: 0;overflow: hidden; */

          `}>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;