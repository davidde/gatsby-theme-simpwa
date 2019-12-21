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

            <div id={props.id} className={`${sidebar.portraitOpen} ${sidebar.landscapeOpen}`} >
                <Icon
                  icon={props.icon}
                  portraitOpen={sidebar.portraitOpen}
                  landscapeOpen={sidebar.landscapeOpen}
                  toggleSidebar={sidebar.toggleSidebar}
                  hasTouchscreen={sidebar.hasTouchscreen}
                />

                <InnerSidebar
                  header={props.header}
                  portraitOpen={sidebar.portraitOpen}
                  landscapeOpen={sidebar.landscapeOpen}
                >
                    {props.children}
                </InnerSidebar>
            </div>

    )}
    </SidebarContext.Consumer>
  );
}

export default OuterSidebar;