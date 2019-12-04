import React from 'react';


function Header(props) {
  // 'leftActiveLandscape' and 'rightActiveLandscape' props only exist
  // in the Main header, to change the header's text offset in CSS:
  let leftOpenLandscape = props.leftActiveLandscape ?
                          'left-open-landscape' : 'left-closed-landscape';
  let rightOpenLandscape = props.rightActiveLandscape ?
                          'right-open-landscape' : 'right-closed-landscape';

  return (
    <div className='header'>
        <h1 className={`title
            ${leftOpenLandscape}
            ${rightOpenLandscape}
        `}>
            {props.title}
        </h1>
    </div>
  )
}

export default Header;
