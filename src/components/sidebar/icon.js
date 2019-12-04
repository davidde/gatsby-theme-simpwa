import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/// Represents the inactive, hoverable sidebar that triggers activation by clicking on it:
function Icon(props) {
  let canHover = props.hasTouchscreen ? '' : 'canHover';
  let sidestripHidden = props.sidestrip === 'hidden' ? 'sidestripHidden' : '';

  return (
    <div
      className={`icon ${canHover}`}
      onClick={props.toggleSidebar}
    >

        {/* Square icon div: */}
        <div className={`icon-square ${props.whichSide} ${props.activePortrait} ${props.activeLandscape}`} >
            <FontAwesomeIcon icon={props.icon} />
        </div>

        {/* Small strip below icon to the side of the screen: */}
        <div className={`sidestrip ${props.whichSide} ${props.activePortrait} ${props.activeLandscape} ${sidestripHidden}`} />

        {/* This div is a simple cosmetic touch that covers up the border between
            the iconSquare and sidestrip divs, so it appears as one whole: */}
        <div className={`sidestripPatch ${props.whichSide} ${props.activePortrait} ${props.activeLandscape} ${sidestripHidden}`} />

    </div>
  )
}

export default Icon;