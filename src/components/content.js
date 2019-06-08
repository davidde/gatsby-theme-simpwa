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
          /* Without border-box, the 10% left/right padding is added
             to the 100% width, resulting in overflowing content! */
          box-sizing: border-box;
          padding: 2rem 10% 3rem;
          overflow-y: auto;
    `}>
      {children}
    </div>
  )
}