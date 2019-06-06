import React from "react"
import { Global, css } from "@emotion/core"
import { global } from "../constants"
import './theme.css';

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
              background-color: var(--bg);
              /* Disable scrolling on body: */
              overflow: hidden;
              font-family: "Open Sans", sans-serif;
            }
          `}
        />

          {children}

    </div>
  )
}