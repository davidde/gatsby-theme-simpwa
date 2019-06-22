import React from "react"
import { css } from "@emotion/core"
import { header, sidebar } from "../constants"

import Hoverbar from "./hoverbar"
import Content from '../components/content'


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

              background: ${backgroundColor};
              ${'border-' + otherSide + ': 2px solid ' + borderColor};
              /* border-right: 20px solid red; */
              /* position: absolute; */
              /* top: 0; */
      `}>
        <Hoverbar
            whichSide={this.props.whichSide}
            icon={this.props.icon}
            isActive={this.state.isActive}
            onClick={this.toggleSidebar}
        />

        
          {/* Header of the sidebar: */}
          <div css={css`
              position: sticky;
              ${this.props.whichSide}: 4rem;
              /* float: ${this.props.whichSide}; */
              height: 4rem;
              width: calc(100% - 4rem);
              color: ${header.color.font};
              border-bottom: 2px solid ${borderColor};
          `}>
            <h1 css={css`
                height: 100%;
                margin: 0;
                line-height: calc(4rem - 2px); /* Vertical center */
                text-align: center; /* Horizontal center */
                overflow: hidden;
            `}>
              {this.props.title}
            </h1>
          </div>

          {/* Content of the sidebar: */}
          <Content>
              {this.props.children}
          </Content>
        </div>
      
    );
  }
}

export default Sidebar;