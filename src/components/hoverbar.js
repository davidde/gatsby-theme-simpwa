import React from "react"
import { css } from "@emotion/core"
import { sidebar } from "../constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Hoverbar(props) {
  let width = props.whichSide === 'left' ? sidebar.left.width : sidebar.right.width;
  let icon = props.whichSide === 'left' ? sidebar.left.icon : sidebar.right.icon;

  let backgroundColor = props.whichSide === 'left' ?
        sidebar.left.color.background : sidebar.right.color.background;
  let backgroundHoverColor = props.whichSide === 'left' ?
        sidebar.left.color.backgroundHover : sidebar.right.color.backgroundHover;
  let iconColor = props.whichSide === 'left' ?
        sidebar.left.color.icon : sidebar.right.color.icon;
  let iconHoverColor = props.whichSide === 'left' ?
        sidebar.left.color.iconHover : sidebar.right.color.iconHover;
  let borderColor = props.whichSide === 'left' ?
        sidebar.left.color.border : sidebar.right.color.border;
  let borderHoverColor = props.whichSide === 'left' ?
        sidebar.left.color.borderHover : sidebar.right.color.borderHover;

  let iconId = 'icon-' + props.whichSide;
  let squareId = 'square-' + props.whichSide;
  let stripId = 'strip-' + props.whichSide;

  return (
    <div onClick={props.onClick}
          css={css`
            &:hover {
              cursor: pointer;
              /* Messy due to CSS limitations: cannot elegantly target element B when hovering element A. */
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
            /* min-height: 2rem;
            min-width: 2rem; */
            height: 4rem;
            width: 4rem;
            text-align: center;
            border: 2px solid ${borderColor};
            ${'border-' + props.whichSide}: 0;
            background: ${backgroundColor};
            z-index: 10;
      `}>
          <FontAwesomeIcon
            id={iconId}
            icon={icon}
            css={css`
              font-size: 1.75rem;
              margin: 1rem;
              color: ${iconColor};
              
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

export default Hoverbar;