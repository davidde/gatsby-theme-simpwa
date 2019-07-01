import React from "react"


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
      <div id='layout'>

        {this.props.children}

      </div>
    )
  }
}

export default Layout;