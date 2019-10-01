import React from 'react';


function Header(props) {
  // Only exists in Main header, to change text offset in CSS:
  let leftActive = props.leftActive ? 'leftActive' : '';
  let rightActive = props.rightActive ? 'rightActive' : '';

  return (
    <div className={`header ${props.which}`}>
        <h1 className={`${props.which} ${leftActive} ${rightActive}`}>
            {props.title}
        </h1>
    </div>
  )
}

export default Header;
