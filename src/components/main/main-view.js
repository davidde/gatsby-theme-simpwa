import React from 'react';

import Header from '../common/header';
import Content from '../common/content';
import MockBackground from './mock-background';
import LeftContext from '../common/contexts/left-context';
import RightContext from '../common/contexts/right-context';
import StyleContext from '../common/contexts/style-context';

function MainView(props) {
  return (
    <LeftContext.Consumer>
    { left => (
    <RightContext.Consumer>
    { right => (
    <StyleContext.Consumer>
    { style => (

        <div id={style.main}>
            <Header
              title={props.header}
              headerClass={style['header']}
              titleClass={`
                ${style['title']}
                ${style['left' + left.landscapeOpen]}
                ${style['right' + right.landscapeOpen]}
              `}
            />

            <Content
              contentClass={`
                ${style['content']}
                ${style['left' + left.portraitOpen]}
                ${style['left' + left.landscapeOpen]}
                ${style['right' + right.portraitOpen]}
                ${style['right' + right.landscapeOpen]}
              `}
            >
                {props.children}
            </Content>

            <MockBackground
              leftPortraitOpen={`${style['left' + left.portraitOpen]}`}
              rightPortraitOpen={`${style['right' + right.portraitOpen]}`}
              toggleSidebar={left.toggleSidebar}
            />
        </div>

    )}
    </StyleContext.Consumer>
    )}
    </RightContext.Consumer>
    )}
    </LeftContext.Consumer>
  );
}

export default MainView;