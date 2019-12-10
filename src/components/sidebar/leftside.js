import React from 'react';
import Sidebar from './sidebar';
import Icon from './icon';


class Leftside extends React.Component {
  static displayName = 'Leftside';

  render() {
    return (
        <div id='left' className={`${this.props.portraitOpen} ${this.props.landscapeOpen}`} >
            <Icon
              icon={this.props.icon}
              portraitOpen={this.props.portraitOpen}
              landscapeOpen={this.props.landscapeOpen}
              toggleSidebar={this.props.toggleSidebar}
              hasTouchscreen={this.props.hasTouchscreen}
            />

            <Sidebar
              header={this.props.header}
              portraitOpen={this.props.portraitOpen}
              landscapeOpen={this.props.landscapeOpen}
            >
                {this.props.children}
            </Sidebar>
        </div>
    );
  }
}

export default Leftside;