import React from "react"
import { Global, css } from "@emotion/core"
import { global, header, sideStrip } from "../constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {
  return (
    <div css={css`
          position: sticky;
          height: 4rem;
          top: 0;
          background: linear-gradient(to right, ${header.color.leftGradient}, ${header.color.rightGradient});
          box-shadow: 0px 0px 10px;

    `}>

      <h1 css={css`
          position: fixed;
          height: inherit;
          top: inherit;
          left: 3.6rem;
          right: 3.6rem;
          background: linear-gradient(to right, ${header.color.leftGradient}, ${header.color.rightGradient});
          
          color: ${header.color.font};
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
  let width = props.whichSide === 'left' ? sideStrip.left.width : sideStrip.right.width;
  let icon = props.whichSide === 'left' ? sideStrip.left.icon : sideStrip.right.icon;

  let backgroundColor = props.whichSide === 'left' ?
        sideStrip.left.color.background : sideStrip.right.color.background;
  let backgroundHoverColor = props.whichSide === 'left' ?
        sideStrip.left.color.backgroundHover : sideStrip.right.color.backgroundHover;
  let iconColor = props.whichSide === 'left' ?
        sideStrip.left.color.icon : sideStrip.right.color.icon;
  let iconHoverColor = props.whichSide === 'left' ?
        sideStrip.left.color.iconHover : sideStrip.right.color.iconHover;
  let borderColor = props.whichSide === 'left' ?
        sideStrip.left.color.border : sideStrip.right.color.border;
  let borderHoverColor = props.whichSide === 'left' ?
        sideStrip.left.color.borderHover : sideStrip.right.color.borderHover;

  let iconId = 'icon-' + props.whichSide;
  let squareId = 'square-' + props.whichSide;
  let stripId = 'strip-' + props.whichSide;

  return (
    <div css={css`
            &:hover {
              cursor: pointer;
              /* Messy due to CSS limitations: cannot elegantly target element B when hoovering element A. */
              ${'#' + stripId} {
                background: ${backgroundHoverColor};
                box-shadow: 0px 2px 0px 2px ${borderHoverColor};
              }
              ${'#' + squareId} {
                background: ${backgroundHoverColor};
                box-shadow: none;
                border: 2px solid ${borderHoverColor};
                ${'border-' + props.whichSide}: 0;
              }
              ${'#' + iconId} {
                color: ${iconHoverColor};
              }
            }
    `}>
      {/* Square icon div: */}
      <div id={squareId}
          css={css`
            position: fixed;
            top: 0;
            ${props.whichSide}: 0;
            min-height: 2rem;
            min-width: 2rem;
            border: 2px solid ${borderColor};
            ${'border-' + props.whichSide}: 0;
            background: ${backgroundColor};
      `}>
          <FontAwesomeIcon
            id={iconId}
            icon={icon}
            css={css`
              font-size: 1.75rem;
              margin: 1rem;
              color: ${iconColor};
              z-index: 10;
              
          `}/>
      </div>

      {/* Small strip below icon to the side of the screen: */}
      <div id={stripId}
          css={css`
            position: fixed;
            top: 3.9rem;
            ${props.whichSide}: 0;
            height: 100%;
            width: ${width}rem;
            background: ${backgroundColor};
            box-shadow: 0px 2px 0px 2px ${borderColor};
      `}/>
    </div>
  )
}

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

        <Header />
        <SideStrip whichSide='right' />
        <SideStrip whichSide='left' />
        <br/>

        <div css={css`
              padding-left: ${10 * sideStrip.left.width}rem;
              padding-right: ${10 * sideStrip.right.width}rem;
              color: ${global.color.font};
        `}>
          {children}
        </div>
    </div>
  )
}