/* eslint-disable */
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { lighten, darken, adjustHue } from "polished";
// CSS equivalents: filter: brightness(150%); filter: brightness(50%); filter: hue-rotate(-15deg);

export const global = {
  color: {
    background: 'rgb(255, 255, 197, 0.9)',
    font: 'rgb(200, 0, 100, 0.8)',
  },
}

export const header = {
  height: 4, // in rem!
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
      // To log these colors in console, e.g.:
      // getComputedStyle(document.querySelector("#square-left")).background;
      background: adjustHue(-15, header.color.leftGradient), // dark orange: rgb(255, 101, 0)
      backgroundHover: darken(0.12, adjustHue(-15, header.color.leftGradient)), // darker orange: rgb(194, 77, 0)
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
      background: darken(0.2, header.color.rightGradient), // dark violet: rgb(226, 40, 226)
      backgroundHover: darken(0.35, header.color.rightGradient), // darker violet: rgb(167, 23, 167)
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
