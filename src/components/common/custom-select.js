import React from 'react';
import './custom-select.scss';


/// This CustomSelect can be styled any way possible,
/// because it uses divs internally instead of an actual select element:
class CustomSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
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
    if ( this.state.isOpen && !(event.target.classList[0] === 'selected-option' ||
          event.target.classList[0] === 'open' ||
          event.target.classList[0] === 'closed')) {
            this.toggleSelect();
    }
  }

  toggleSelect = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  selectOption = (activeOption) => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.props.onChange(activeOption);
  }

  render() {
    let isOpen = this.state.isOpen ? 'open' : 'closed';

    return (
      <div className='custom-select' >
          <div className={`selected-option ${isOpen}`} onClick={this.toggleSelect} >
            {this.props.value}
          </div>

          <div className={`options-box ${isOpen}`} >
            {
              React.Children.map(this.props.children,
                (child) => {
                  let selected = this.props.value === child.props.children ?
                                   'selected' : '';
                  return (
                    <div className={selected} onClick={() => this.selectOption(child.props.children)} >
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