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
      activeOption: null,
    }
  }

  componentDidMount() {
    let longestChildLength = this.props.children[0].props.children.length;
    this.props.children.forEach(
      (child) => {
        if (child.props.children.length > longestChildLength) {
          longestChildLength = child.props.children.length;
        }
        if (this.props.value === child.props.value) {
          this.setState({
            activeOption: child.props.children,
          });
        }
      }
    );

    this.autoWidth = longestChildLength * 0.62 + 3 + 'em';
    document.addEventListener('click', this.closeSelect);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeSelect);
  }

  closeSelect = (event) => {
    event.preventDefault();
    // If the Select is open, and this click event was NOT on the select itself,
    // then close the select box:
    if ( this.state.isOpen && !(event.target.classList[0] === 'selected-option' ||
          event.target.classList[0] === 'open' ||
          event.target.classList[0] === 'closed')) {
            this.toggleSelect();
    }
  }

  toggleSelect = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  selectOption = (activeValue, activeOption) => {
    this.setState({
      isOpen: !this.state.isOpen,
      activeOption,
    });
    this.props.onChange(activeValue);
  }

  render() {
    let isOpen = this.state.isOpen ? 'open' : 'closed';
    let width = this.props.width ? this.props.width : this.autoWidth;

    return (
      <div className='custom-select' style={{ width: width }} >
          <div className={`selected-option ${isOpen}`} onClick={this.toggleSelect} >
            {this.state.activeOption}
          </div>

          <div className={`options-box ${isOpen}`} >
            { // Map over the child options:
              React.Children.map(this.props.children,
                (child) => {
                  // this.props.value = 'value' prop of CustomSelect
                  // child.props.value = 'value' prop of the option
                  // child.props.children = string inside the option
                  let selected = this.props.value === child.props.value ? 'selected' : '';
                  // Unicode checkmark = &#10003; -> Useful for selected option!
                  return (
                    <div
                      className={selected}
                      onClick={() => this.selectOption(child.props.value, child.props.children)}
                    >
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