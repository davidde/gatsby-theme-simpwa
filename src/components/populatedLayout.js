import React from "react"
import { Global, css } from "@emotion/core"
import { global } from "../constants"

import Header from './header'
import Sidebar from './sidebar'
import Content from './content'


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
              /* border: 3px solid red; */
            }
            body {
              min-height: 100vh;
              max-width: 100vw;
              background-color: ${global.color.background};
              /* Make horizontal scrolling impossible: */
              overflow-x: hidden;
              /* Prevent scrollbars from displaying: */
              scrollbar-width: none; /* Firefox */
              -ms-overflow-style: none; /* IE 10+ */
              ::-webkit-scrollbar {
                display: none; /* Webkit */
              }
            }
          `}
        />

        <Header title='gatsby-theme-dualside' />
        <Sidebar whichSide='right' title='Home' />
        <Sidebar whichSide='left' title='Contents' />

        <Content>
          {children}
        </Content>
    </div>
  )
}