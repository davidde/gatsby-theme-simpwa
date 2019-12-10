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
            leftLandscapeOpen={this.props.leftLandscapeOpen}
            rightLandscapeOpen={this.props.rightLandscapeOpen}
          />

          <Content
            leftPortraitOpen={this.props.leftPortraitOpen}
            leftLandscapeOpen={this.props.leftLandscapeOpen}
            rightPortraitOpen={this.props.rightPortraitOpen}
            rightLandscapeOpen={this.props.rightLandscapeOpen}
          >
              {this.props.children}
          </Content>

          <MockBackground
            leftPortraitOpen={this.props.leftPortraitOpen}
            rightPortraitOpen={this.props.rightPortraitOpen}
            closePortraitSidebars={this.props.closePortraitSidebars}
          />
      </div>
    );
  }
}

export default MainView;
