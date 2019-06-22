import React from "react"
import { css } from "@emotion/core"


function Content(props) {
  return (
    /* Main user content goes in the 'content' grid-area: */
    <div className='content'
          css={css`
            /* Without border-box, the 10% left/right padding is added
              to the 100% width, resulting in overflowing content! */
            box-sizing: border-box;
            height: calc(100vh - var(--headerHeight));
            padding: var(--padding);
            overflow-y: auto;
            direction: var(--direction);
    `}>
      {
        (
          () => {
            if ( props.whichSide === 'right' ) {
              return <div css={css`
                    direction: ltr;
              `}>
                  props.children
              </div>;
            } else {
              return props.children;
            }
          }
        )()
      }
      {/* {props.children} */}
    </div>
  )
}

export default Content;