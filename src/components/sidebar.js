import React from "react"
import { css } from "@emotion/core"
import { sidebar } from "../constants"

import Hoverbar from "./hoverbar"
import Content from './content'
import Header from './header'


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
    
    let borderColor = this.props.whichSide === 'left' ?
          sidebar.left.color.border : sidebar.right.color.border;

    let shadow = this.props.whichSide === 'left' ? '6px 0 15px 0 #888' : '-6px 0 15px 0 #888';
    let transitionDuration = this.props.whichSide === 'left' ?
          sidebar.left.transitionDuration : sidebar.right.transitionDuration;

    return (
      <div id={this.props.whichSide}
            className={`sidebar ${this.props.whichSide}`}
            css={css`
              grid-area: ${this.props.whichSide};
              height: 100%;
              width: ${this.state.isActive ? '30vw' : widthStr };
              transition: width ${transitionDuration};
              box-shadow: ${shadow};
              /* ${this.props.whichSide}:
                ${this.state.isActive ? 0 : '-100vw' }; */
              /* transition: ${this.props.whichSide} 0.7s, width 0.7s; */

              background: var(--bg);
              ${'border-' + otherSide + ': 2px solid ' + borderColor};
              /* border-right: 20px solid red; */
              /* position: absolute; */
              /* top: 0; */
      `}>
          {/* Hoverable part of the sidebar that triggers activation: */}
          <Hoverbar
              whichSide={this.props.whichSide}
              icon={this.props.icon}
              isActive={this.state.isActive}
              onClick={this.toggleSidebar}
          />

          {/* Header of the sidebar: */}
          <Header which={this.props.whichSide} title={this.props.title} />

          {/* Content of the sidebar: */}
          <Content which={this.props.whichSide}>
              {this.props.children}
          </Content>
      </div>
    );
  }
}

export default Sidebar;