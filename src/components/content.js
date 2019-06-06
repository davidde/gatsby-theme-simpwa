import React from "react"
import { css } from "@emotion/core"


// Possibility:
// height: calc(100vh - ${header.height});
// -> string interpolation not possible in calc()
// -> find workaround
export default ({ children }) => {
  return (
    /* Main user content goes in the 'content' grid-area: */
    <div css={css`
          grid-area: content;
          height: calc(100vh - 4rem);
          width: 100%;
          overflow-y: auto;
          padding: 2rem 10% 3rem;
    `}>
      {children}
    </div>
  )
}