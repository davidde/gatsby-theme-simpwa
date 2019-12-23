import React from 'react';


function Content(props) {
  return (
    <div className={props.contentClass}>
        <div>
            {props.children}
        </div>
    </div>
  );
}

export default Content;