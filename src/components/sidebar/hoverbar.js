import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/// Represents the inactive, hoverable sidebar that triggers activation by clicking on it:
function Hoverbar(props) {
  let active = props.isActive ? 'active' : 'inactive';
  let canHover = props.touchscreen ? '' : 'canHover';
  let sidestripHidden = props.sidestrip === 'hidden' ? 'sidestripHidden' : '';

  return (
    <div className={`hoverbar ${canHover} ${active}`}
         onClick={props.onClick} >

        {/* Square icon div: */}
        <div className={`iconSquare ${props.whichSide} ${active}`} >
            <FontAwesomeIcon icon={props.icon} />
        </div>

        {/* Small strip below icon to the side of the screen: */}
        <div className={`sidestrip ${props.whichSide} ${active} ${sidestripHidden}`} />

        {/* This div is a simple cosmetic touch that covers up the border between
            the iconSquare and sidestrip divs, so it appears as one whole: */}
        <div className={`sidestripPatch ${props.whichSide} ${active} ${sidestripHidden}`} />

    </div>
  )
}

export default Hoverbar;