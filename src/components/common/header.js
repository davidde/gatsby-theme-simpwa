import React from 'react';


function Header(props) {
  // The sidebar 'Open' props only exist in the #main header,
  // to prevent the header title to overlap with the icon:
  return (
    <div className='header-div'>
        <div className={`title-div
            ${props.leftLandscapeOpen}
            ${props.rightLandscapeOpen}
        `}>
            {props.title}
        </div>
    </div>
  );
}

export default Header;
