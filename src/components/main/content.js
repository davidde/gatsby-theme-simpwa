import React from "react"


function Content(props) {
  return (
    <div className={`content ${props.which}`}>
      <div>
          {props.children}
      </div>
    </div>
  )
}

export default Content;