import React from 'react';


function Header(props) {
  return (
    <div className={props.headerClass}>
        <h1 className={props.titleClass}>
            {props.title}
        </h1>
    </div>
  );
}

export default Header;
