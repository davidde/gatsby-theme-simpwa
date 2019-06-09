import React from "react"
import { css } from "@emotion/core"
import { header, sidebar } from "../constants"
import Hoverbar from "./hoverbar"

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggleSidebar = () => {
    this.setState({isActive: !this.state.isActive});
  }

  render() {
    let widthStr = this.props.whichSide === 'left' ? sidebar.left.width + 'rem' : sidebar.right.width + 'rem';
    let otherSide = this.props.whichSide === 'left' ? 'right' : 'left';
    
    let backgroundColor = this.props.whichSide === 'left' ?
          sidebar.left.color.background : sidebar.right.color.background;
    let borderColor = this.props.whichSide === 'left' ?
          sidebar.left.color.border : sidebar.right.color.border;

    let shadow = this.props.whichSide === 'left' ? '6px 0 15px 0 #888' : '-6px 0 15px 0 #888';
    let transitionDuration = this.props.whichSide === 'left' ?
          sidebar.left.transitionDuration : sidebar.right.transitionDuration;
    let direction = this.props.whichSide === 'left' ? 'ltr' : 'rtl';

    let sidebarID = 'sidebar-' + this.props.whichSide;
    let sidebarContentID = 'sb-content-' + this.props.whichSide;
    return (
      <div id={sidebarID}
            css={css`
              grid-area: ${this.props.whichSide + 'side'};
              height: 100%;
              width: ${this.state.isActive ? '30vw' : widthStr };
              transition: width ${transitionDuration};
              box-shadow: ${shadow};
              /* ${this.props.whichSide}:
                ${this.state.isActive ? 0 : '-100vw' }; */
              /* transition: ${this.props.whichSide} 0.7s, width 0.7s; */
      `}>
        <Hoverbar whichSide={this.props.whichSide} onClick={this.toggleSidebar} isActive={this.state.isActive} />

        <div css={css`
              height: inherit;
              width: inherit;
              background: ${backgroundColor};
              ${'border-' + otherSide + ': 2px solid ' + borderColor};
              position: absolute;
              top: 0;
        `}>
          {/* Header of the sidebar: */}
          <div css={css`
              position: sticky;
              ${this.props.whichSide}: 4rem;
              height: 4rem;
              width: calc(100% - 4rem);
              border-bottom: 2px solid ${borderColor};
          `}>
            <h1 css={css`
                height: 100%;
                margin: 0;
                color: ${header.color.font};
                line-height: calc(4rem - 2px); /* Vertical center */
                text-align: center; /* Horizontal center */
                overflow: hidden;
            `}>
              {this.props.title}
            </h1>
          </div>

          {/* Content of the sidebar: */}
          <div id={sidebarContentID}
                css={css`
                    box-sizing: border-box;
                    height: calc(100vh - 4rem);
                    padding: 1rem;
                    direction: ${direction};
                    overflow-y: auto;
                    visibility: ${this.state.isActive ? 'visible' : 'hidden' };
          `}>
            <div css={css`
              direction: ltr;
            `}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;