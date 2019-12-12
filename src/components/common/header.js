import React from 'react';


function Header(props) {
  // The sidebar 'Open' props only exist in the #main header,
  // to prevent the header title to overlap with the icon:
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
