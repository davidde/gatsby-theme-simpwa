import React from "react"


function Header(props) {
  return (
    <div className={`header ${props.which}`}>
        <h1>
            {props.title}
        </h1>
    </div>
  )
}

export default Header;
