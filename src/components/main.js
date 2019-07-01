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

      <Header which='main' title={props.title} />
      <Content which='main'>
        {props.children}
      </Content>

    </div>
  )
}

export default Main;
