import React from "react"

import Header from './header'
import Content from './content'


class Main extends React.Component {
  static displayName = 'Main';

  render() {
    return (
      <div id='main'>

        <Header
          which='main'
          title={this.props.header}
          leftActive={this.props.leftActive}
          rightActive={this.props.rightActive}
        />
        <Content which='main'>
          {this.props.children}
        </Content>

      </div>
    )
  }
}

export default Main;
