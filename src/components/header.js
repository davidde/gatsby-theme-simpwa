import React from "react"
import { css } from "@emotion/core"
import { header, sidebar } from "../constants"


function Header(props) {
  return (
    <div css={css`
          grid-area: header;
          position: sticky;
          height: 4rem;
          top: 0;
          border-bottom: 2px solid ${sidebar.left.color.border};
          box-shadow: 0 3px 10px 0 #666;
    `}>

      <h1 css={css`
          height: 100%;
          margin: 0;
          padding-left: 1rem;
          background: linear-gradient(to right, ${header.color.leftGradient}, ${header.color.rightGradient});
          color: ${header.color.font};
          display: flex;
          justify-content: center;
          align-items: center;
      `}>
        {props.title}
      </h1>

    </div>
  )
}

export default Header;
