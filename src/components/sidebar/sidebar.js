import React from 'react';

import Hoverbar from './hoverbar';
import Content from '../common/content';
import Header from '../common/header';
import SidestripContext from '../common/contexts/sidestrip-context';


function Sidebar(props) {
  let active = props.isActive ? 'active' : '';

  return (
    <SidestripContext.Consumer>
    {
      ({ sidestrip }) => (
        <div className={`
            sidebar
            ${props.whichSide}
            ${active}
            ${sidestrip === 'off' ? 'sidestripOff' : ''}
            ${props.hasTouchscreen && (sidestrip === 'mobileOff' ||
                                  sidestrip === 'hidden') ? 'sidestripOff' : ''}
        `}>
            {/* Hoverable part of the sidebar that triggers activation: */}
            <Hoverbar
                whichSide={props.whichSide}
                icon={props.icon}
                isActive={props.isActive}
                onClick={props.toggleSidebar}
                hasTouchscreen={props.hasTouchscreen}
                sidestrip={sidestrip}
            />

            {/* Mock background layers to hide the portrait sidebar by clicking on it: */}
            <div
              className={`mock-portrait-bg ${props.whichSide} ${active}`}
              onClick={props.toggleSidebar}
            />
            <div className={`mock-portrait-bg-sub ${props.whichSide} ${active}`} />

            {/* In portrait mode the active sidebar is styled differently: */}
            <div className={`portraitSidebar ${props.whichSide} ${active}`}>
              <Header which={props.whichSide} title={props.header} />

              <Content which={props.whichSide}>
                  {props.children}
              </Content>
            </div>
        </div>
      )
    }
    </SidestripContext.Consumer>
  );
}

export default Sidebar;