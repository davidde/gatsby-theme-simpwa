import React from "react"
import { Global, css } from "@emotion/core"
import { global } from "../constants"

import Header from './header'
import Sidebar from './sidebar'


export default ({ children }) => {
  return (
    <div css={css`
          display: grid;
          grid-template-columns: min-content 1fr;
          grid-template-rows: minmax(min-content, max-content) 1fr;
          grid-template-areas: 'leftside header rightside'
                              'leftside content rightside';
    `}>
        <Global
          styles={css`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              min-height: 100vh;
              max-width: 100vw;
              background-color: ${global.color.background};
              /* Ensure no horizontal scroll bars appear: */
              overflow-x: hidden;
            }
          `}
        />

        <Header title='gatsby-theme-dualside' />
        <Sidebar whichSide='right' />
        <Sidebar whichSide='left' />
        <br/>

        <div css={css`
              grid-area: content;
              
              padding-left: 10vw;
              padding-right: 10vw;
              color: ${global.color.font};
        `}>
          {children}
        </div>
    </div>
  )
}