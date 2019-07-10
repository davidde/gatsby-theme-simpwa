import React from "react"

import Hoverbar from "./hoverbar"
import Content from '../main/content'
import Header from '../main/header'


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
    let active = this.state.isActive ? 'active' : '';

    return (
      <div className={`sidebar ${this.props.whichSide} ${active}`}>
          {/* Hoverable part of the sidebar that triggers activation: */}
          <Hoverbar
              whichSide={this.props.whichSide}
              icon={this.props.icon}
              isActive={this.state.isActive}
              onClick={this.toggleSidebar}
          />

          {/* Mock background layer to hide the portrait sidebar by clicking on it: */}
          <div className={`mock-portrait-bg ${this.props.whichSide} ${active}`} onClick={this.toggleSidebar} />

          {/* In portrait mode the active sidebar is styled differently: */}
          <div className={`portraitSidebar ${this.props.whichSide} ${active}`}>
            <Header which={this.props.whichSide} title={this.props.title} />

            <Content which={this.props.whichSide}>
                {this.props.children}
            </Content>
          </div>
      </div>
    );
  }
}

export default Sidebar;