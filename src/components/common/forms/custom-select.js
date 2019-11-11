import React from 'react';
import './custom-select.scss';


/// This CustomSelect can be styled any way possible,
/// because it uses divs internally instead of an actual select element.
/// The disadvantage is that every attribute/event of native selects
/// needs to be specifically implemented; currently only the 'onChange'
/// event is implemented, which covers most basic uses.
class CustomSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      width: null,
    }
    this.optionValuesToNames = {};
  }

  componentDidMount() {
    let longestChildLength = this.props.children[0].props.children.length;
    // this.props.value = 'value' prop of CustomSelect
    // this.props.children = options of CustomSelect
    // child.props.value = 'value' prop of the option
    // child.props.children = string inside the option
    this.props.children.forEach(
      (child) => {
        if (child.props.children.length > longestChildLength) {
          longestChildLength = child.props.children.length;
        }
        this.optionValuesToNames[child.props.value] = child.props.children;
      }
    );

    let width = longestChildLength * 0.6135 + 3 + 'em';
    this.setState({ width });
  }

  closeSelect = () => {
    if (this.state.isOpen) {
      this.toggleSelect();
    }
  }

  toggleSelect = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  selectOption = (activeValue) => {
    this.setState({ isOpen: !this.state.isOpen });
    this.props.onChange(activeValue);
  }

  render() {
    let isOpen = this.state.isOpen ? 'open' : 'closed';
    let width = this.props.width ? this.props.width : this.state.width;

    return (
      // tabIndex='0' gives any element the capacity to have focus!
      <div className='custom-select' tabIndex='0' onBlur={this.closeSelect} style={{ width: width }} >
          <select className='hidden-native-select' {...this.props}>{this.props.children}</select>
          <div className={`selected-option ${isOpen}`} onClick={this.toggleSelect} >
            {this.optionValuesToNames[this.props.value]}
          </div>

          <div className={`options-box ${isOpen}`} >
            { // Map over the child options:
              React.Children.map(this.props.children,
                (child) => {
                  let selected = this.props.value === child.props.value ? 'selected' : '';
                  return (
                    <div
                      className={selected}
                      onClick={() => this.selectOption(child.props.value)}
                    >
                      <span className={`checkmark ${selected}`}>&#10003; &nbsp;</span>
                      {child.props.children}
                    </div>
                  );
                }
              )
            }
          </div>
      </div>
    );
  }
}


export default CustomSelect;