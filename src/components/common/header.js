import React from 'react';


function Header(props) {
  // The 'leftLandscapeOpen' and 'rightLandscapeOpen' props only exist
  // in the Main header, to change the header's text offset in CSS:
  return (
    <div className='header'>
        <h1 className={`title
            ${props.leftLandscapeOpen}
            ${props.rightLandscapeOpen}
        `}>
            {props.title}
        </h1>
    </div>
  );
}

export default Header;
