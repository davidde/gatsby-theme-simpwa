import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/// Represents the inactive, hoverable sidebar that triggers activation by clicking on it:
function Icon(props) {
  let canHover = props.hasTouchscreen ? '' : 'canHover';

  return (
      <div
        className={`icon ${canHover}`}
        onClick={props.toggleSidebar}
      >
          <div className='icon-square' >
              <FontAwesomeIcon icon={props.icon} />
          </div>

          <div className='icon-strip'>
              <div className={`strip top ${props.portraitOpen} ${props.landscapeOpen}`} />
              <div className={`strip bottom ${props.portraitOpen} ${props.landscapeOpen}`} />
          </div>
      </div>
  );
}

export default Icon;