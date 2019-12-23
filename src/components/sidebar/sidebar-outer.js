import React from 'react';
import InnerSidebar from './sidebar-inner';
import Icon from './icon';


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

            <div id={sidebar.style[props.id]}
                 className={`
                    ${sidebar.style[sidebar.portraitOpen]}
                    ${sidebar.style[sidebar.landscapeOpen]}
                 `}
            >
                <Icon
                  icon={props.icon}
                  id={props.id}
                  iconClass={`
                    ${sidebar.style['icon']}
                    ${sidebar.style[props.hasTouchscreen ? '' : 'canHover']}
                  `}
                  iconSquareClass={sidebar.style['iconSquare']}
                  topStripClass={`
                    ${sidebar.style['iconStrip']}
                    ${sidebar.style['top']}
                    ${sidebar.style[sidebar.portraitOpen]}
                    ${sidebar.style[sidebar.landscapeOpen]}
                  `}
                  bottomStripClass={`
                    ${sidebar.style['iconStrip']}
                    ${sidebar.style['bottom']}
                    ${sidebar.style[sidebar.portraitOpen]}
                    ${sidebar.style[sidebar.landscapeOpen]}
                  `}
                  toggleSidebar={sidebar.toggleSidebar}
                />

                <InnerSidebar
                  header={props.header}
                  sidebarClass={`
                    ${sidebar.style['InnerSidebar']}
                    ${sidebar.style[sidebar.portraitOpen]}
                    ${sidebar.style[sidebar.landscapeOpen]}
                  `}
                  headerClass={sidebar.style['header']}
                  titleClass={sidebar.style['title']}
                  contentClass={sidebar.style['content']}
                >
                    {props.children}
                </InnerSidebar>
            </div>

    )}
    </SidebarContext.Consumer>
  );
}

export default OuterSidebar;