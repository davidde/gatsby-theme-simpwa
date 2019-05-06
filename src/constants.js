/* eslint-disable */
import { faBars, faWrench } from '@fortawesome/free-solid-svg-icons'


export const colors = {
  leftSidebarBg: 'orange',
  rightSidebarBg: 'violet',
  sidebarFont: '#7d4444',
  sidebarHover: '#f1f1f1',

  bodyBg: '#fffecc', //'#feffc5', //'#faf1d7', // 'rgb(230, 240, 255)', //
  bodyFont: 'rgb(200, 0, 100, 0.8)', //'rgb(250, 0, 50)',

  headerBg: 'rgb(0, 34, 46)',
  headerFont: 'rgb(82, 38, 228)', // '#830602',
}

export const sideStrip = {
  left: {
    width: 1, // in rem!
    icon: faBars,
    z: 6, // z-index
  },
  right: {
    width: 1, // in rem!
    icon: faWrench,
    z: 5, // z-index
  }
}

const sidebarLandscapeWidth = '40vw';
const sidebarPortraitWidth = '80vw';

const transitionDuration = '0.4s';

const mediaQueryWidth = '1200px';
