import React from 'react';


function Content(props) {
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