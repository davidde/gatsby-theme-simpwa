import React from 'react';
import SidestripContext from '../contexts/sidestrip-context';
import CustomSelect from '../selects/custom-select';


function SidestripSwitcherCustom() {
  return (
    <SidestripContext.Consumer>
    {
        ({ sidestrip, changeSidestrip }) => (
            <form>
                <label>
                  <span>Sidestrip: &nbsp;</span>
                  <CustomSelect
                    name='sidestrip'
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


export default SidestripSwitcherCustom;