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


## Installation
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

Alternatively, you could opt for the all-in-one experience by using this theme's starter,
which does include those plugins:
```bash
gatsby new my-awesome-app https://github.com/DavidDeprost/gatsby-starter-simpwa
```

## Usage
The theme provides 4 simple components to build your app; a parent `<Layout>` component,
and its 3 children, `<MainView>`, `<Leftside>` and `<Rightside>`.

Simply import them into your code to start building:
```js
import { Layout, MainView, Leftside, Rightside } from 'gatsby-theme-simpwa'
```

### The \<Layout> component
The parent component that enables its 3 children components to work properly.

Props:
- **theme**: The theme to use for your app. Defaults to 'default-theme'.

### The \<MainView> component
The main content of your app. Should be a direct descendant of `<Layout>`.

Props:
- **header**: The header of your app.

### The \<Leftside> and \<Rightside> components
The **left and right sidebars** of your app. Should be direct descendants of `<Layout>`.  
Either can be omitted if you only want a single sidebar.

Props:
- **header**: The header of the sidebar.
- **icon**: Font Awesome icon from `@fortawesome/free-solid-svg-icons`
  that triggers the sidebar.


## Customization
Customization is fairly simple due to a modular approach to styling/theming.

> Even the theme 's got themes!

Each theme consists of 3 .scss partials: a **colors**, **specs**, and **styles** file,
which define *color variables*, *spec variables* (like sizes and media queries), and
the *general styles* of the theme respectively.  
You can shadow any of these files for a quick change, or create your personal
theme by putting together 3 modified partials.
