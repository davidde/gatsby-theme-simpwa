import React from 'react';
import Sidebar from './sidebar';
import Icon from './icon';


class Leftside extends React.Component {
  static displayName = 'Leftside';

  render() {
    return (
        <div id='left' className={this.props.open} >
            <Icon
              icon={this.props.icon}
              open={this.props.open}
              toggleSidebar={this.props.toggleSidebar}
              hasTouchscreen={this.props.hasTouchscreen}
            />

            <Sidebar
              header={this.props.header}
              open={this.props.open}
            >
                {this.props.children}
            </Sidebar>
        </div>
    );
  }
}

export default Leftside;