/* eslint-disable */
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { lighten, darken, adjustHue } from "polished";


export const global = {
  color: {
    background: 'rgb(255, 255, 197, 0.9)',
    font: 'rgb(200, 0, 100, 0.8)',
  },
}

export const header = {
  color: {
    leftGradient: 'orange',
    rightGradient: 'violet',
    font: 'rgb(82, 38, 228)',
  },
}

export const sidebar = {
  left: {
    width: 0.5, // in rem!
    icon: faBars,
    transitionDuration: '0.5s',
    color: {
      background: adjustHue(-15, header.color.leftGradient), // dark orange
      backgroundHover: darken(0.12, adjustHue(-15, header.color.leftGradient)), // darker orange
      icon: header.color.font,
      iconHover: '#f1f1f1',
      // border: header.color.font,
      // borderHover: lighten(0.15, header.color.font),
      border: lighten(0.15, header.color.font),
      borderHover: header.color.font,
    },
  },

  right: {
    width: 0.5, // in rem!
    icon: faHome,
    transitionDuration: '0.5s',
    color: {
      background: darken(0.2, header.color.rightGradient), // dark violet
      backgroundHover: darken(0.35, header.color.rightGradient), // darker violet
      icon: header.color.font,
      iconHover: '#f1f1f1',
      // border: header.color.font,
      // borderHover: lighten(0.15, header.color.font),
      border: lighten(0.15, header.color.font),
      borderHover: header.color.font,
    },
  }
}

const sidebarLandscapeWidth = '40vw';
const sidebarPortraitWidth = '80vw';

const transitionDuration = '0.4s';

const mediaQueryWidth = '1200px';
