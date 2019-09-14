import React from 'react';
import './select.scss';


/// Adapted from https://www.w3schools.com/howto/howto_custom_select.asp (non-React)
class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      activeOption: this.props.value,
    }
  }

  toggleSelect = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  selectOption = (activeOption) => {
    let isOpen = !this.state.isOpen;
    this.setState({
      isOpen,
      activeOption,
    });
    this.props.onChange(activeOption);
  }

  render() {
    let hidden = this.state.isOpen ? '' : 'hidden';
    let active = this.state.isOpen ? 'select-arrow-active' : '';

    return (
      <div className='custom-select' >
          <select {...this.props} >
            {this.props.children}
          </select>

          <div className={`active-option ${active}`} onClick={this.toggleSelect} >
            {this.state.activeOption}
          </div>

          <div className={`select-options ${hidden}`} >
            {
              React.Children.map(this.props.children,
                (child) => {
                  return (
                    <div onClick={() => this.selectOption(child.props.children)} >
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


export default Select;