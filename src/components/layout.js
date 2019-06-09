import React from "react"
import { css } from "@emotion/core"


export default ({ theme, children }) => {
  if (!theme) {
    theme = 'joy';
  }
  require('./themes/theme-' + theme + '.scss');

  return (
    <div css={css`
          display: grid;
          grid-template-columns: auto 1fr auto;
          grid-template-rows: calc(4rem + 2px) auto;
          grid-template-areas: 'leftside header  rightside'
                               'leftside content rightside';
    `}>

      {children}

    </div>
  )
}