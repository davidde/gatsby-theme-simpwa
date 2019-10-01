import React from 'react';
import SidestripContext from '../contexts/sidestrip-context';
import StyledSelect from '../selects/styled-select';


function SidestripSwitcherStyled() {
  return (
    <SidestripContext.Consumer>
    {
        ({ sidestrip, changeSidestrip }) => (
            <form>
                <label>
                  <span>Sidestrip: &nbsp;</span>
                  <StyledSelect
                    name='sidestrip'
                    value={sidestrip}
                    onChange={changeSidestrip}
                  >
                    <option value='on'>on</option>
                    <option value='off'>off</option>
                    <option value='mobileOff'>off (mobile)</option>
                    <option value='hidden'>hidden</option>
                    <option value='mobileHidden'>hidden (mobile)</option>
                  </StyledSelect>
                </label>
            </form>
        )
    }
    </SidestripContext.Consumer>
  );
}


export default SidestripSwitcherStyled;