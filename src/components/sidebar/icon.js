import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/// Represents the hoverable icon area that triggers the sidebar by clicking on it:
function Icon(props) {
  return (
      /* eslint-disable-next-line */
      <div
        className={props.iconClass}
        onClick={() => props.toggleSidebar(props.id)}
      >
          <div className={props.iconSquareClass} >
              <FontAwesomeIcon icon={props.icon} />
          </div>

          <div className={props.topStripClass} />
          <div className={props.bottomStripClass} />
      </div>
  );
}

export default Icon;