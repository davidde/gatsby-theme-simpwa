import React from "react"
import { Global, css } from "@emotion/core"
import { colors, sideStrip } from "../variables"


function Header() {
  return (
    <div css={css`
          position: sticky;
          top: 0;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to right, ${colors.leftSidebarBg}, ${colors.rightSidebarBg});
          box-shadow: 0px 0px 10px;
          color: ${colors.headerFont};
    `}>
      <h1>
        gatsby-theme-dualdocs
      </h1>
    </div>
  )
}

function SideStrip(props) {
  let bgColor = props.whichSide === 'left' ? colors.leftSidebarBg : colors.rightSidebarBg;
  let width = props.whichSide === 'left' ? sideStrip.leftWidth : sideStrip.rightWidth;

  return (
    <div css={css`
          position: fixed;
          ${props.whichSide}: 0;
          height: 100%;
          box-shadow: 0px 2px 0px 2px ${colors.sidebarFont};
          width: ${width}rem;
          background: ${bgColor};
          &:hover {
            cursor: pointer;
          }
    `}/>
  )
}

export default ({ children }) => (
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
            background-color: ${colors.bodyBg};
            /* Ensure no horizontal scroll bars appear: */
            overflow-x: hidden;
          }
        `}
      />

      <Header />
      <SideStrip whichSide='left' />
      <SideStrip whichSide='right' />
      <br/>

      <div css={css`
            padding-left: ${5 * sideStrip.leftWidth}rem;
            padding-right: ${5 * sideStrip.rightWidth}rem;
      `}>
        {children}
      </div>
  </div>
)