import React from 'react';

import Header from '../common/header';
import Content from '../common/content';
import MockBackground from './mock-background';
import LeftContext from '../common/contexts/left-context';
import RightContext from '../common/contexts/right-context';


function MainView(props) {
  return (
    <LeftContext.Consumer>
    { left => (
    <RightContext.Consumer>
    { right => (

        <div id='main'>
            <Header
              title={props.header}
              leftLandscapeOpen={'left-' + left.landscapeOpen}
              rightLandscapeOpen={'right-' + right.landscapeOpen}
            />

            <Content
              leftPortraitOpen={'left-' + left.portraitOpen}
              leftLandscapeOpen={'left-' + left.landscapeOpen}
              rightPortraitOpen={'right-' + right.portraitOpen}
              rightLandscapeOpen={'right-' + right.landscapeOpen}
            >
                {props.children}
            </Content>

            <MockBackground
              leftPortraitOpen={'left-' + left.portraitOpen}
              rightPortraitOpen={'right-' + right.portraitOpen}
              toggleSidebar={left.toggleSidebar}
            />
        </div>

    )}
    </RightContext.Consumer>
    )}
    </LeftContext.Consumer>
  );
}

export default MainView;