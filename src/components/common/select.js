import React from 'react';
import './select.scss';


/// Adapted from https://www.w3schools.com/howto/howto_custom_select.asp (non-React)
class Select extends React.Component {
  constructor(props) {
    super(props);
    // this.divRef = React.createRef();
    // this.selectRef = React.createRef();
    this.selectedRef = React.createRef();
    this.state = {
      isOpen: false,
      activeOption: this.props.value,
    }
  }

  // componentDidMount() {
  //   var x, j, select, a, b, c;
  //   x = this.divRef.current;
  //   select = this.selectRef.current;
  //   // Create a new DIV that will act as the selected item:
  //   a = document.createElement('div');
  //   a.setAttribute('class', 'active-option');
  //   a.innerHTML = select.options[select.selectedIndex].innerHTML;
  //   console.log('x = ', x);
  //   console.log('a = ', a);
  //   x.appendChild(a);
  //   // console.log('x = ', x);
  //   // Create a new DIV that will contain the option list:
  //   b = document.createElement('div');
  //   b.setAttribute('class', 'select-options hidden');

  //   for (j = 0; j < select.length; j++) {
  //     console.log('Accessed for loop ', j);
  //     console.log(select.options[j]);
  //     // For each option in the original select element,
  //     // create a new DIV that will act as an option item:
  //     c = document.createElement('div');
  //     c.innerHTML = select.options[j].innerHTML;
  //     c.addEventListener('click', function(e) {
  //         console.log('Inner option clicked!');
  //         // When an item is clicked, update the original select box and selected item:
  //         var y, i, k, s, h;
  //         s = this.parentNode.parentNode.getElementsByTagName('select')[0];
  //         console.log('select = ', s);
  //         h = this.parentNode.previousSibling;
  //         for (i = 0; i < s.length; i++) {
  //           if (s.options[i].innerHTML === this.innerHTML) {
  //             s.selectedIndex = i;
  //             h.innerHTML = this.innerHTML;
  //             y = this.parentNode.getElementsByClassName('same-as-selected');
  //             for (k = 0; k < y.length; k++) {
  //               y[k].removeAttribute('class');
  //             }
  //             this.setAttribute('class', 'same-as-selected');
  //             break;
  //           }
  //         }
  //         h.click();
  //     });
  //     b.appendChild(c);
  //   }
  //   x.appendChild(b);

  //   a.addEventListener('click', this.toggleSelects);
  //   document.addEventListener('click', this.closeAllSelect);
  // }

  componentDidMount() {
    // let selected = this.selectedRef.current;
    // selected.addEventListener('click', this.toggleSelect);
    // document.addEventListener('click', this.closeAllSelect);
  }

  componentWillUnmount() {
    // let selected = this.selectedRef.current;
    // selected.removeEventListener('click', this.toggleSelect);
    // document.removeEventListener('click', this.closeAllSelect);
  }

  toggleSelects = (event) => {
    // When the select box is clicked, close any other select boxes,
    // and open/close the current select box:
    console.log('nextSibling: ', event.currentTarget.nextSibling.classList);
    event.stopPropagation();
    this.closeAllSelect(event.currentTarget);
    event.target.nextSibling.classList.toggle('hidden');
    console.log('nextSibling: ', event.target.nextSibling.classList.toggle('hidden'));
    event.target.classList.toggle('select-arrow-active');
    console.log('nextSibling: ', event.target.nextSibling)
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

  closeAllSelect(elmnt) {
    // Close all select boxes in the document,
    // except the current one:
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName('select-options');
    y = document.getElementsByClassName('active-option');
    for (i = 0; i < y.length; i++) {
      if (elmnt === y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove('select-arrow-active');
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add('hidden');
      }
    }
  }

  render() {
    let hidden = this.state.isOpen ? '' : 'hidden';

    return (
      <div ref={this.divRef} className='custom-select' >
        <select ref={this.selectRef} {...this.props} >
          {this.props.children}
        </select>

        <div className='active-option' onClick={this.toggleSelect} >
          {this.state.activeOption}
        </div>

        <div className={`select-options ${hidden}`}>
          {
            React.Children.map(this.props.children,
              (child) => {
                return (
                  <div onClick={() => this.selectOption(child.props.children)}>
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