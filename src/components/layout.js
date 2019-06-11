import React from "react"
import { css } from "@emotion/core"


class Layout extends React.Component {
  constructor(props) {
    super(props);
    
    let theme = this.props.theme;
    if (!theme) {
      theme = 'joy';
    }
    require('./themes/theme-' + theme + '.scss');
  }

  render() {
    return (
      <div css={css`
            display: grid;
            grid-template-columns: auto 1fr auto;
            grid-template-rows: calc(4rem + 2px) auto;
            grid-template-areas: 'leftside header  rightside'
                                'leftside content rightside';
      `}>

        {this.props.children}

      </div>
    )
  }
}

export default Layout;