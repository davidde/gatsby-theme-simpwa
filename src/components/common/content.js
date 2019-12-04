import React from 'react';


function Content(props) {
  return (
    <div className='content'>
      <div>
          {props.children}
      </div>
    </div>
  )
}

export default Content;