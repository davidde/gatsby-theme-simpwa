import React from 'react';
import InnerSidebar from './sidebar-inner';
import Icon from './icon';


/// Represents the flex item that expands/shrinks upon activation/deactivation,
/// so the main content gets pushed aside in landscape mode.
/// It is composed from:
/// * The Icon, which always remains fixed in place.
/// * The InnerSidebar, which slides in and out of view.
function OuterSidebar(props) {
    return (
        <div id={props.id} className={`${props.portraitOpen} ${props.landscapeOpen}`} >
            <Icon
              icon={props.icon}
              portraitOpen={props.portraitOpen}
              landscapeOpen={props.landscapeOpen}
              toggleSidebar={props.toggleSidebar}
              hasTouchscreen={props.hasTouchscreen}
            />

            <InnerSidebar
              header={props.header}
              portraitOpen={props.portraitOpen}
              landscapeOpen={props.landscapeOpen}
            >
                {props.children}
            </InnerSidebar>
        </div>
    );
}

export default OuterSidebar;