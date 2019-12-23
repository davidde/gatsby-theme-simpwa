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

        <div id={left.style.main}> {/* left.style is identical to right.style */}
            <Header
              title={props.header}
              headerClass={left.style['header']}
              titleClass={`
                ${left.style['title']}
                ${left.style['left' + left.landscapeOpen]}
                ${left.style['right' + right.landscapeOpen]}
              `}
            />

            <Content
              contentClass={`
                ${left.style['content']}
                ${left.style['left' + left.portraitOpen]}
                ${left.style['left' + left.landscapeOpen]}
                ${left.style['right' + right.portraitOpen]}
                ${left.style['right' + right.landscapeOpen]}
              `}
            >
                {props.children}
            </Content>

            <MockBackground
              leftPortraitOpen={`${left.style['left' + left.portraitOpen]}`}
              rightPortraitOpen={`${left.style['right' + right.portraitOpen]}`}
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