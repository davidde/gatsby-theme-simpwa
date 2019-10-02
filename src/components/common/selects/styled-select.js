import React from 'react';
import './styled-select.scss';


/// The one big problem with styled native selects is that it
/// is impossible to get rid of the blue hover color on its options.
/// As a result, styling the select global background-color is not really
/// worth it because most colors will clash with this blue hover color ...
class StyledSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: null,
    }
  }

  componentDidMount() {
    let longestChildLength = this.props.children[0].props.children.length;
    this.props.children.forEach(
      (child) => {
        if (child.props.children.length > longestChildLength) {
          longestChildLength = child.props.children.length;
        }
      }
    );

    let width = longestChildLength * 0.6135 + 3 + 'em';
    this.setState({ width });
  }

  render() {
    let width = this.props.width ? this.props.width : this.state.width;

    return (
      <select
        className='styled-select'
        style={{ width: width }}
        {...this.props}
      >
        {this.props.children}
      </select>
    );
  }
}


export default StyledSelect;