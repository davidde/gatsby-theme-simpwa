import React from "react"

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

          <Header which={this.props.whichSide} title={this.props.title} />

          <Content which={this.props.whichSide}>
              {this.props.children}
          </Content>
      </div>
    );
  }
}

export default Sidebar;