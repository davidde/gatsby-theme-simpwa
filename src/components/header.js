import React from "react"
import { css } from "@emotion/core"
import { header, sidebar } from "../constants"


function Header(props) {
  return (
    <div css={css`
          grid-area: header;
          position: sticky;
          z-index: 5; /* To fix intrusive shadow from sidebar */
          height: 4rem;
          background: linear-gradient(to right, ${header.color.leftGradient}, ${header.color.rightGradient});
          color: ${header.color.font};
          border-bottom: 2px solid ${sidebar.left.color.border};
          border-left: 2px solid ${sidebar.left.color.border};
    `}>

      <h1 css={css`
          height: 100%;
          margin: 0;
          line-height: calc(4rem - 2px); /* Vertical center */
          text-align: center; /* Horizontal center */
          overflow: hidden;
      `}>
        {props.title}
      </h1>

    </div>
  )
}

export default Header;
