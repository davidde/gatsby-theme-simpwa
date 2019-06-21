import React from "react"
import { css } from "@emotion/core"


class Layout extends React.Component {
  constructor(props) {
    super(props);
    
    let theme = this.props.theme;
    if (!theme) {
      theme = 'joy';
    }
    require('./themes/theme-' + theme + '.css');
  }

  render() {
    return (
      <div css={css`
            display: grid;
            grid-template-columns: auto 1fr auto;
            grid-template-areas: 'left main right';
      `}>

        {this.props.children}

      </div>
    )
  }
}

export default Layout;