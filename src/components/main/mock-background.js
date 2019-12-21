import React from 'react';


/// Mock background layers to deactivate the portrait-mode
/// sidebars by clicking in the background:
function MockBackground(props) {
  let toggleSidebar = props.rightPortraitOpen === 'right-portrait-open' ?
                      () => props.toggleSidebar('right') :
                      () => props.toggleSidebar('left');

  return (
    <>  {/* eslint-disable-next-line */}
        <div
          className={`mock-bg top-white ${props.leftPortraitOpen} ${props.rightPortraitOpen}`}
          onClick={toggleSidebar}
        />
        <div className={`mock-bg bottom-black ${props.leftPortraitOpen} ${props.rightPortraitOpen}`} />
    </>
  );
}

export default MockBackground;