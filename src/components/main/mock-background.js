import React from 'react';


/// Mock background layers to deactivate the portrait-mode
/// sidebars by clicking in the background:
function MockBackground(props) {
  let visible = props.activePortrait ? 'visible' : 'invisible';

  return (
    <>
        <div
          className={`mock-bg-white ${visible}`}
          onClick={props.closePortraitSidebars}
        />
        <div className={`mock-bg-black ${visible}`} />
    </>
  );
}

export default MockBackground;