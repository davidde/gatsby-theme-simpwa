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

  componentDidMount() {
    document.addEventListener('click', this.closeSelect);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeSelect);
  }

  closeSelect = (event) => {
    event.preventDefault();
    // If the Select is open, and this click event was NOT on the select itself,
    // then close the select box:
    if ( this.state.isOpen && !(event.target.classList[0] === 'active-option' ||
          event.target.classList[0] === 'select-arrow-active')) {
            this.toggleSelect();
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