import React from 'react';
import SidestripContext from '../contexts/sidestrip-context';


function SidestripSwitcher(props) {
  let SelectTag = 'select';
  if (props.select === 'custom' || props.select === 'styled') {
    SelectTag = require('../forms/' + props.select + '-select.js').default;
  }

  return (
    <SidestripContext.Consumer>
    {
        ({ sidestrip, changeSidestrip }) => (
            <form style={{margin: '1em 0'}}>
                <label>
                  <span>Sidestrip: &nbsp;</span>
                  <SelectTag
                    name='sidestrip'
                    value={sidestrip}
                    onChange={changeSidestrip}
                  >
                    <option value='on'>on</option>
                    <option value='hidden'>hidden</option>
                    <option value='off'>off</option>
                  </SelectTag>
                </label>
            </form>
        )
    }
    </SidestripContext.Consumer>
  );
}


export default SidestripSwitcher;