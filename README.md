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

Alternatively, you could opt for the **all-in-one experience** by using
[this theme's starter](https://github.com/DavidDeprost/gatsby-starter-simpwa),
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
  - **theme**: The theme to use for your app:  
    'light', 'light_minimal', 'dark', 'dark_minimal', 'joy' or 'joy_minimal'  
    Defaults to `light`.

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
the *general styles* of the theme respectively:
```
src/styles
├── dark_minimal_theme.scss
├── dark_theme.scss
├── joy_minimal_theme.scss
├── joy_theme.scss
├── light_minimal_theme.scss
├── light_theme.scss
└── partials
    ├── _colors_dark.scss
    ├── _colors_joy.scss
    ├── _colors_light.scss
    ├── _specs_default.scss
    ├── _specs_minimal.scss
    └── _styles_default.scss
```

For a quick change, it's straightforward to shadow these files, and modify your version:
```bash
mkdir ./src/gatsby-theme-simpwa
cp -r ./node_modules/gatsby-theme-simpwa/src/styles ./src/gatsby-theme-simpwa/styles
```
(Note that it's required to shadow all 4 files of a specific theme because they are interdependent.)

Additionally, you can create your own theme by putting together 3 modified partials:
- Copy a partial and modify it:
  ```bash
  cp ./src/gatsby-theme-simpwa/styles/partials/_colors_joy.scss ./src/gatsby-theme-simpwa/styles/partials/_colors_flashy.scss
  ```
- Put together a new theme:
  ```bash
  cat > src/gatsby-theme-simpwa/styles/flashy_theme.scss
  [Paste: @import 'partials/colors_flashy', 'partials/specs_default', 'partials/styles_default';]
  [CTRL+D]
  ```
- You can then activate your theme by providing it to the `<Layout>` component's `theme` prop:
  ```js
  <Layout theme='flashy'>
  ```
This same process also works for modifying the specs and styles partials.