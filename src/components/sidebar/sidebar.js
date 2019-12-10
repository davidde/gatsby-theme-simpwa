import React from 'react';

import Content from '../common/content';
import Header from '../common/header';


function Sidebar(props) {
  return (
    <div className={`sidebar ${props.portraitOpen} ${props.landscapeOpen}`}>
        <Header title={props.header} />

        <Content>
            {props.children}
        </Content>
    </div>
  );
}

export default Sidebar;