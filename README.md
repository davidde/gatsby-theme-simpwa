# Gatsby theme for simple PWA's
This theme provides a generic, re-usable and modular layout for developing simple PWA's
(Progressive Web Applications) with responsive sidebars on the left and right.
The intended use case is for **simple web apps** aiming to present themselves as close
as possible to native mobile apps. The idea here is that a simple app can stuff all
its content in the main screen and its left/right sidebars.

Focus is on:
- Single codebase that works optimally on both desktop and mobile
- Responsive design: should work on any viewport size
- Touch-friendly: sidebars should respond to swiping
- On mobile, the PWA should deliver an experience comparable to native apps


# Installation
```bash
npm install gatsby-theme-simpwa
```
Then, in your gatsby-config.js, add the theme to your plugins:
```js
module.exports = {
  plugins: [
    `gatsby-theme-simpwa`,
  ],
}
```
If you want the full PWA experience, you'll also want to install the
[gatsby-plugin-manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/) and
[gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/) plugins,
which aren't included in this theme because this makes them hard to customize.

Alternatively, you could opt for the **all-in-one experience** by using
[this theme's starter](https://github.com/davidde/gatsby-starter-simpwa),
which does include those plugins:
```bash
gatsby new my-awesome-app https://github.com/davidde/gatsby-starter-simpwa
```

# Usage
The theme provides 4 simple components to build your app; a parent `<Layout>`
component, and its 3 children, `<Leftside>`, `<MainView>` and `<Rightside>`.
Since the sidebar implementation relies on flexbox, it is important to specify
the children components in that exact source order (left to right),
although either of the sidebars can be omitted.

Simply import them into your code to start building:
```js
import { Layout, MainView, Leftside, Rightside } from 'gatsby-theme-simpwa';
```

## \<Layout> component
The parent component that enables its 3 children components to work properly.

Props:
  - **theme**: The theme to use for your app: 'light', 'dark' or 'joy'.
  - **leftActive**: *Bool* (not string) indicating whether the left sidebar
    should be active on first load.
  - **rightActive**: *Bool* (not string) indicating whether the right sidebar
    should be active on first load.
  - **mutex**: *Bool* (not string) indicating whether the sidebars should mutually
    exclude each other from being active.
  - **sidestrip**: String indicating the status of the small hoverable strip
  at the edge of the screen: 'on', 'hidden', 'off', 'off-touchscreens'.

**NOTE:**  
The Layout component's props are initialisation props.
They will not trigger a rerender on subsequent updates, since they are immediately written to state.
If you do not specify a prop, its state will default to the value set for it in the stylesheet's variables.

## \<MainView> component
The main content of your app. Should be a direct descendant of `<Layout>`.

Props:
  - **header**: The header of your app.

## \<Leftside> and \<Rightside> components
The **left and right sidebars** of your app. Should be direct descendants of `<Layout>`.  
Either can be omitted if you only want a single sidebar.

Props:
  - **header**: The header of the sidebar.
  - **icon**: Font Awesome icon from `@fortawesome/free-solid-svg-icons`
    that triggers the sidebar.


# Customization
Customization is fairly simple due to a modular approach to styling/theming.

> Even the theme 's got themes!

These subthemes are defined in the scss partial `_vars.scss` in `/src/components/main/`.  
You can shadow this file together with the main `layout.scss` and modify the subtheme variables,
or create your own subthemes altogether!