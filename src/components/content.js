import React from "react"
import { css } from "@emotion/core"


export default ({ children }) => {
  return (
    /* Main user content goes in the 'content' grid-area: */
    <div id='content'
          css={css`
          height: calc(100vh - var(--headerHeight));
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