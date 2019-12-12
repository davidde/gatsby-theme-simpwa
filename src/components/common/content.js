import React from 'react';


function Content(props) {
  // The sidebar 'Open' props only exist in the #main content,
  // to prevent the content to overlap with the sidestrip:
  return (
    <div className={`content
        ${props.leftPortraitOpen}
        ${props.leftLandscapeOpen}
        ${props.rightPortraitOpen}
        ${props.rightLandscapeOpen}
    `}>
        <div>
            {props.children}
        </div>
    </div>
  );
}

export default Content;