import React from "react"
import { css } from "@emotion/core"

import Header from '../components/header'
import Content from '../components/content'


function Main(props) {
  return (
    <div id='main'
          css={css`
            grid-area: main;
    `}>

      <Header title={props.title} />
      <Content>
        {props.children}
      </Content>

    </div>
  )
}

export default Main;
