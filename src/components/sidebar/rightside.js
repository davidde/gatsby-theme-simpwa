import React from 'react';
import Sidebar from './sidebar';
import Icon from './icon';


class Rightside extends React.Component {
  static displayName = 'Rightside';

  render() {
    return (
        <div id='right' className={this.props.open} >
            <Icon
              icon={this.props.icon}
              toggleSidebar={this.props.toggleSidebar}
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

export default Rightside;