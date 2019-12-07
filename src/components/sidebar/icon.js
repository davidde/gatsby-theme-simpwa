import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidestripContext from '../common/contexts/sidestrip-context';


/// Represents the inactive, hoverable sidebar that triggers activation by clicking on it:
function Icon(props) {
  let canHover = props.hasTouchscreen ? '' : 'canHover';

  return (
    <SidestripContext.Consumer>
    {
      ({ sidestrip }) => (
          <div
            className={`icon ${canHover}`}
            onClick={props.toggleSidebar}
          >
              {/* Square icon div: */}
              <div className='icon-square' >
                  <FontAwesomeIcon icon={props.icon} />
              </div>

              {/* Small strip below icon to the side of the screen: */}
              <div className={`icon-strip ${props.open} ${sidestrip}`} />

              {/* This div is a simple cosmetic touch that covers up the border between
                  the icon-square and icon-strip divs, so it appears as one whole: */}
              <div className={`icon-strip-patch ${props.open} ${sidestrip}`} />
          </div>
      )
    }
    </SidestripContext.Consumer>
  );
}

export default Icon;