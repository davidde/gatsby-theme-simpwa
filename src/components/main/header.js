import React from "react"


function Header(props) {
  let leftActive = props.leftActive ? 'leftActive' : '';
  let rightActive = props.rightActive ? 'rightActive' : '';

  return (
    <div className={`header ${props.which} ${leftActive} ${rightActive}`}>
        <h1 className={`${props.which} ${leftActive} ${rightActive}`}>
            {props.title}
        </h1>
    </div>
  )
}

export default Header;
