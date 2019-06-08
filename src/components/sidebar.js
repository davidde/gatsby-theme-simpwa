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
    let startHeader = this.props.whichSide === 'left' ? '4rem' : '0';
    let transitionDuration = this.props.whichSide === 'left' ?
          sidebar.left.transitionDuration : sidebar.right.transitionDuration;

    return (
      <div css={css`
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
              position: fixed;
              top: 0;
        `}>
          {/* Header of the sidebar: */}
          <div css={css`
              position: relative;
              left: ${startHeader};
              height: 4rem;
              width: calc(100% - 4rem);
              border-bottom: 2px solid ${borderColor};
          `}>
            <h1 css={css`
                height: 100%;
                margin: 0;
                color: ${header.color.font};
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
            `}>
              {this.props.title}
            </h1>
          </div>

          {/* Content of the sidebar: */}
          <div css={css`
                height: calc(100vh - 4rem);
                overflow-y: auto;
                padding: 1rem;
          `}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;