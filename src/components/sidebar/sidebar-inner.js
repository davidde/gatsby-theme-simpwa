import React from 'react';

import Content from '../common/content';
import Header from '../common/header';


/// Represents the actual sidebar that slides into and out of view:
function InnerSidebar(props) {
  return (
    <div className={props.sidebarClass}>
        <Header
          title={props.header}
          headerClass={props.headerClass}
          titleClass={props.titleClass}
        />

        <Content contentClass={props.contentClass}>
            {props.children}
        </Content>
    </div>
  );
}

export default InnerSidebar;