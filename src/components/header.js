import React from "react"
import { css } from "@emotion/core"


function Header(props) {
  return (
    <div className={`header ${props.which}`}
        css={css`
          position: sticky;
          height: var(--headerHeight);
          width: var(--headerWidth);
          float: var(--float);
          background: var(--bg);
          color: var(--color);
          border-bottom: var(--border);
    `}>
        <h1 css={css`
            height: 100%;
            margin: 0;
            line-height: calc(var(--headerHeight) - var(--borderWidth)); /* Vertical center */
            text-align: center; /* Horizontal center */
            overflow: hidden;
        `}>
            {props.title}
        </h1>
    </div>
  )
}

export default Header;
