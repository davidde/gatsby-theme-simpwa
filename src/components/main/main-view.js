import React from 'react';

import Header from '../common/header';
import Content from '../common/content';
import MockBackground from './mock-background';


function MainView(props) {
  return (
      <div id='main'>
          <Header
            title={props.header}
            leftLandscapeOpen={props.leftLandscapeOpen}
            rightLandscapeOpen={props.rightLandscapeOpen}
          />

          <Content
            leftPortraitOpen={props.leftPortraitOpen}
            leftLandscapeOpen={props.leftLandscapeOpen}
            rightPortraitOpen={props.rightPortraitOpen}
            rightLandscapeOpen={props.rightLandscapeOpen}
          >
              {props.children}
          </Content>

          <MockBackground
            leftPortraitOpen={props.leftPortraitOpen}
            rightPortraitOpen={props.rightPortraitOpen}
            closePortraitSidebars={props.closePortraitSidebars}
          />
      </div>
  );
}

MainView.displayName = 'MainView';
export default MainView;
