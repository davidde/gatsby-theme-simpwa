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
          /* box-shadow: 0px 3px 10px ${header.color.font}; */
          border-bottom: 2px solid ${header.color.font};
          /* border-top: 0; */
    `}>

      <h1 css={css`
          /* position: fixed;
          height: inherit;
          top: inherit;
          left: 4rem;
          right: 4rem; */
          height: 100%;
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
