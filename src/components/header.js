import React from "react"
import { css } from "@emotion/core"
import { header } from "../constants"


function Header(props) {
  return (
    <div css={css`
          grid-area: header;
          position: sticky;
          height: 4rem;
          top: 0;
          box-shadow: 0px 0px 10px;
    `}>

      <h1 css={css`
          position: fixed;
          height: inherit;
          top: inherit;
          left: 4rem;
          right: 4rem;
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
