import React from "react"
import { Global, css } from "@emotion/core"
import { colors, sideStrip } from "../constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { lighten } from "polished";


function Header() {
  return (
    <div css={css`
          position: sticky;
          height: 4rem;
          top: 0;
          background: linear-gradient(to right, ${colors.leftSidebarBg}, ${colors.rightSidebarBg});
          box-shadow: 0px 0px 10px;

    `}>

      <h1 css={css`
          position: fixed;
          height: inherit;
          top: inherit;
          left: 4rem;
          right: 4rem;
          color: ${colors.headerFont};
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          white-space: nowrap;
      `}>
        gatsby-theme-dualdocs
      </h1>

    </div>
  )
}

function SideStrip(props) {
  let bgColor = props.whichSide === 'left' ? colors.leftSidebarBg : colors.rightSidebarBg;
  let width = props.whichSide === 'left' ? sideStrip.left.width : sideStrip.right.width;
  let gradient = props.whichSide === 'left' ?
                `linear-gradient(${colors.leftSidebarBg}, ${colors.rightSidebarBg})`:
                `linear-gradient(${colors.rightSidebarBg}, ${colors.leftSidebarBg})`;
  let icon = props.whichSide === 'left' ? sideStrip.left.icon : sideStrip.right.icon;
  let z = props.whichSide === 'left' ? sideStrip.left.z : sideStrip.right.z;
  let iconId = 'icon-' + props.whichSide;

  return (
    <div css={css`
            &:hover {
              cursor: pointer;
              /* Messy due to CSS limitations: cannot elegantly target element B when hoovering element A.
                 => gradient is lost!
              */
              > div {
                background: ${lighten(0.1, bgColor)};
              }
              ${'#' + iconId} {
                color: ${colors.sidebarHover};
              }
            }
    `}>
      {/* Square icon div: */}
      <div css={css`
          position: fixed;
          top: 0;
          ${props.whichSide}: 0;
          min-height: 2rem;
          min-width: 2rem;
          border: 2px solid ${colors.headerFont};
          ${'border-' + props.whichSide}: 0;
          background: ${bgColor};
      `}>
          <FontAwesomeIcon
            id={iconId}
            icon={icon}
            css={css`
              font-size: 1.75rem;
              margin: 1rem;
              color: ${colors.headerFont};
              z-index: ${z};
              
          `}/>
      </div>

      {/* Small strip below icon to the side of the screen: */}
      <div css={css`
            position: fixed;
            ${props.whichSide}: 0;
            height: 100%;
            box-shadow: 0px 2px 0px 2px ${colors.headerFont};
            width: ${width}rem;
            background: ${gradient};
      `}/>
    </div>
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
            padding-left: ${5 * sideStrip.left.width}rem;
            padding-right: ${5 * sideStrip.right.width}rem;
            color: ${colors.bodyFont};
      `}>
        {children}
      </div>
  </div>
)