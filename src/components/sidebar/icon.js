import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/// Represents the hoverable icon area that triggers the sidebar by clicking on it:
function Icon(props) {
  let canHover = props.hasTouchscreen ? '' : 'canHover';

  return (
      /* eslint-disable-next-line */
      <div
        className={`icon ${canHover}`}
        onClick={props.toggleSidebar}
      >
          <div className='icon-square' >
              <FontAwesomeIcon icon={props.icon} />
          </div>

          <div className={`icon-strip top ${props.portraitOpen} ${props.landscapeOpen}`} />
          <div className={`icon-strip bottom ${props.portraitOpen} ${props.landscapeOpen}`} />
      </div>
  );
}

export default Icon;