import React from "react"
import { css } from "@emotion/core"
import { sidebar } from "../constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hoverbar from "./hoverbar";


function Sidebar(props) {
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
            grid-area: ${props.whichSide + 'side'};
            
    `}>
      <Hoverbar whichSide={props.whichSide} />

      {/* Content of the sidebar: */}
      <div css={css`
            height: 100%;
            width: 30vw;
            z-index: 5;
            background: ${backgroundColor};
            box-shadow: 0px 2px 0px 2px ${borderColor};
            overflow: hidden;
            position: fixed;
            top: 0;
            cursor: auto;
            ${props.whichSide}: 0;

      `}/>
    </div>
  )
}

export default Sidebar;