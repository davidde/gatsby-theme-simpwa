import React from "react"
import { css } from "@emotion/core"


function Content(props) {
  return (
    <div className='content'
          css={css`
            /* Without border-box, the left/right padding is added
              to the 100% width, resulting in overflowing content! */
            box-sizing: border-box;
            height: calc(100vh - var(--headerHeight));
            padding: var(--padding);
            overflow-y: auto;
            direction: var(--direction);
            clear: both;
            /* Scrollbar styling: */
            ::-webkit-scrollbar {
              width: 0.6rem;
              background: transparent;
            }
            ::-webkit-scrollbar-thumb {
              background: var(--bg);
              border-radius: 0.6rem;
            } /* End scrollbar styling */
    `}>
      <div css={css`
              direction: ltr;
      `}>
          {props.children}
      </div>
    </div>
  )
}

export default Content;