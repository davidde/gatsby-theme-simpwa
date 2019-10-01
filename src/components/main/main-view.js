import React from "react"

import Header from '../common/header'
import Content from '../common/content'


class MainView extends React.Component {
  static displayName = 'MainView';

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

export default MainView;
