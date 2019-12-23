import React from 'react';
import InnerSidebar from './sidebar-inner';
import Icon from './icon';
import StyleContext from '../common/contexts/style-context';


/// Represents the flex item that expands/shrinks upon activation/deactivation,
/// so the main content gets pushed aside in landscape mode.
/// It is composed from:
/// * The Icon, which always remains fixed in place.
/// * The InnerSidebar, which slides in and out of view.
function OuterSidebar(props) {
  let SidebarContext = require('../common/contexts/' + props.id + '-context.js').default;

  return (
    <SidebarContext.Consumer>
    { sidebar => (
    <StyleContext.Consumer>
    { style => (

            <div id={style[props.id]}
                 className={`
                    ${style[sidebar.portraitOpen]}
                    ${style[sidebar.landscapeOpen]}
                 `}
            >
                <Icon
                  icon={props.icon}
                  id={props.id}
                  iconClass={`
                    ${style['icon']}
                    ${style[props.hasTouchscreen ? '' : 'canHover']}
                  `}
                  iconSquareClass={style['iconSquare']}
                  topStripClass={`
                    ${style['iconStrip']}
                    ${style['top']}
                    ${style[sidebar.portraitOpen]}
                    ${style[sidebar.landscapeOpen]}
                  `}
                  bottomStripClass={`
                    ${style['iconStrip']}
                    ${style['bottom']}
                    ${style[sidebar.portraitOpen]}
                    ${style[sidebar.landscapeOpen]}
                  `}
                  toggleSidebar={sidebar.toggleSidebar}
                />

                <InnerSidebar
                  header={props.header}
                  sidebarClass={`
                    ${style['InnerSidebar']}
                    ${style[sidebar.portraitOpen]}
                    ${style[sidebar.landscapeOpen]}
                  `}
                  headerClass={style['header']}
                  titleClass={style['title']}
                  contentClass={style['content']}
                >
                    {props.children}
                </InnerSidebar>
            </div>

    )}
    </StyleContext.Consumer>
    )}
    </SidebarContext.Consumer>
  );
}

export default OuterSidebar;