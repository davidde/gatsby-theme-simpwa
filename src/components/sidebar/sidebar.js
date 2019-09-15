import React from "react"

import Hoverbar from './hoverbar';
import Content from '../main/content';
import Header from '../main/header';
import ThemeContext from '../common/theme-context';


class Sidebar extends React.Component {
  render() {
    let active = this.props.isActive ? 'active' : '';

    return (
      <ThemeContext.Consumer>
        {
          ({ theme }) => (
            <div className={`sidebar ${this.props.whichSide} ${theme + 'Theme'} ${active}`}>
                {/* Hoverable part of the sidebar that triggers activation: */}
                <Hoverbar
                    whichSide={this.props.whichSide}
                    icon={this.props.icon}
                    isActive={this.props.isActive}
                    onClick={this.props.toggleSidebar}
                />

                {/* Mock background layers to hide the portrait sidebar by clicking on it: */}
                <div className={`mock-portrait-bg ${this.props.whichSide} ${active}`} onClick={this.props.toggleSidebar} />
                <div className={`mock-portrait-bg-sub ${this.props.whichSide} ${active}`} />

                {/* In portrait mode the active sidebar is styled differently: */}
                <div className={`portraitSidebar ${this.props.whichSide} ${active}`}>
                  <Header which={this.props.whichSide} title={this.props.header} />

                  <Content which={this.props.whichSide}>
                      {this.props.children}
                  </Content>
                </div>
            </div>
          )
        }
      </ThemeContext.Consumer>
    );
  }
}

export default Sidebar;