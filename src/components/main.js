import React from "react"

import Header from '../components/header'
import Content from '../components/content'


function Main(props) {
  return (
    <div id='main'>

      <Header which='main' title={props.title} />
      <Content which='main'>
        {props.children}
      </Content>

    </div>
  )
}

export default Main;
