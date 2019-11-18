import React from 'react';
import './styled-select.scss';


/// The one big problem with styled native selects is that it
/// is impossible to get rid of the blue hover color on its options.
/// As a result, styling the select global background-color is not really
/// worth it because most colors will clash with this blue hover color ...
class StyledSelect extends React.Component {
  constructor(props) {
    super(props);

    let longestChildLength = this.props.children[0].props.children.length;
    this.props.children.forEach(
      (child) => {
        if (child.props.children.length > longestChildLength) {
          longestChildLength = child.props.children.length;
        }
      }
    );

    this.width = longestChildLength * 0.6135 + 3 + 'em';
  }

  render() {
    let width = this.props.width ? this.props.width : this.width;

    return (
      <select
        className='styled-select'
        style={{ width: width }}
        {...this.props}
      />
    );
  }
}


export default StyledSelect;