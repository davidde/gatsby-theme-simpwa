import React from 'react';

import Header from '../common/header';
import Content from '../common/content';
import MockBackground from './mock-background';


class MainView extends React.Component {
  static displayName = 'MainView';

  render() {
    return (
      <div id='main'>
          <Header
            title={this.props.header}
            leftActiveLandscape={this.props.leftActiveLandscape}
            rightActiveLandscape={this.props.rightActiveLandscape}
          />

          <Content rightOpen={this.props.rightOpen}>
              {this.props.children}
          </Content>

          <MockBackground
            activePortrait={this.props.activePortrait}
            closePortraitSidebars={this.props.closePortraitSidebars}
          />
      </div>
    )
  }
}

export default MainView;
