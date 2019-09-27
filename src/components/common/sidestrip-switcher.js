import React from 'react';
import SidestripContext from './sidestrip-context';
import CustomSelect from './custom-select';


function SidestripSwitcher() {
  return (
    <SidestripContext.Consumer>
    {
        ({ sidestrip, changeSidestrip }) => (
            <form>
                <label>
                  <span>Sidestrip: &nbsp;</span>
                  <CustomSelect
                    name='sidestrip'
                    width='10rem'
                    value={sidestrip}
                    onChange={changeSidestrip}
                  >
                    <option value='on'>on</option>
                    <option value='off'>off</option>
                    <option value='mobileOff'>off (mobile)</option>
                    <option value='hidden'>hidden</option>
                    <option value='mobileHidden'>hidden (mobile)</option>
                  </CustomSelect>
                </label>
            </form>
        )
    }
    </SidestripContext.Consumer>
  );
}


export default SidestripSwitcher;