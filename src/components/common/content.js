import React from 'react';


function Content(props) {
  return (
    <div className={`content ${props.rightOpen}`}>
      <div>
          {props.children}
      </div>
    </div>
  )
}

export default Content;