import React from 'react';


function Content(props) {
  return (
    <div className={`content ${props.rightOpen} ${props.leftOpen}`}>
      <div>
          {props.children}
      </div>
    </div>
  )
}

export default Content;