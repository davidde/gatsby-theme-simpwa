import React from "react"
import { Global, css } from "@emotion/core"
import { global } from "../constants"

import Header from './header'
import Sidebar from './sidebar'


export default ({ children }) => {
  return (
    <div>
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
              padding-left: 10vw;
              padding-right: 10vw;
              color: ${global.color.font};
        `}>
          {children}
        </div>
    </div>
  )
}