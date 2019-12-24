import React from 'react';

import Content from '../common/content';
import Header from '../common/header';


/// Represents the actual sidebar that slides into and out of view:
function InnerSidebar(props) {
  return (
    <div className={`inner-sidebar ${props.portraitOpen} ${props.landscapeOpen}`}>
        <Header title={props.header} />

        <Content>
            {props.children}
        </Content>
    </div>
  );
}

export default InnerSidebar;