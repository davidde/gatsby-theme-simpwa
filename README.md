# Gatsby theme for simple PWA's
This theme provides a generic, re-usable and modular layout for developing simple
[PWA's](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
with responsive left/right sidebars.
The intended use case is for **simple web apps** aiming to present themselves as close
as possible to native mobile apps. The idea here is that a simple app can stuff all
its content in the main screen and its sidebars.

### Priorities:
- Single codebase for both desktop and mobile
- PWA experience comparable to native apps
- Touch-friendly: sidebars should respond to swiping
- Responsive design: should work on any viewport size
- Simple sidebar design: see [minimal implementation](https://github.com/davidde/sidebars)

### How it looks:
- [Deployed theme starter](https://davidde.github.io/gatsby-starter-simpwa/)
([source code](https://github.com/davidde/gatsby-starter-simpwa))

# Installation
* Create a new project based on
  [this theme's starter](https://github.com/davidde/gatsby-starter-simpwa):
  ```bash
  gatsby new my-app https://github.com/davidde/gatsby-starter-simpwa
  cd my-app
  gatsby develop
  ```

* **Or** install the theme to an existing project and configure it:
  ```bash
  npm install gatsby-theme-simpwa
  ```
  Then, in your gatsby-config.js, add the theme to your plugins,
  and override the default PWA manifest options:
  ```js
  module.exports = {
    plugins: [
      {
        resolve: 'gatsby-theme-simpwa',
        options: {
          name: 'my-app',
          short_name: 'my-app',
          start_url: '/',
          background_color: '#663399',
          theme_color: '#663399',
          display: 'standalone',
          icon: 'src/images/icon.png', // This path is relative to the root of the site.
        },
      },
    ],
  }
  ```

# Usage
The theme provides 4 main components to build your app; a parent `<Layout>`
component, and its 3 children, `<Leftside>`, `<MainView>` and `<Rightside>`.
Since the sidebar implementation relies on flexbox, it is important to specify
the child components in that exact source order (left to right),
although either of the sidebars can be omitted.

Simply import them into your code to start building:
```js
import { Layout, MainView, Leftside, Rightside } from 'gatsby-theme-simpwa';
```

## \<Layout> component
The parent component that enables its 3 children components to work properly.

*Optional* props:
  - **theme**: The theme to use for your app: 'light', 'dark' or 'joy'. Defaults to 'light'.
  - **leftActive**: *Bool* (not string) indicating whether the left sidebar
    should be active on first load. Defaults to true.
  - **rightActive**: *Bool* (not string) indicating whether the right sidebar
    should be active on first load. Defaults to true.
  - **mutex**: *Bool* indicating whether the sidebars should mutually
    exclude each other from being active. Defaults to false.
  - **sidestrip**: String indicating the status of the small hoverable strip
  at the edge of the screen:  
  'on', 'hidden', 'off', 'off-touchscreens'. Defaults to 'off-touchscreens'.

**NOTE:**  
The Layout component's props are initialisation props.
They will not trigger a rerender on subsequent updates, since they are immediately written to state.

## \<Leftside> and \<Rightside> components
The **left and right sidebars** of your app. Should be direct descendants of `<Layout>`, and Leftside
should be specified first in source order (before MainView), and Rightside last (after MainView).
Either can be omitted if you only want a single sidebar.

Props:
  - **header**: The header of the sidebar.
  - **icon**: Font Awesome icon from `@fortawesome/free-solid-svg-icons`
    that triggers the sidebar.

## \<MainView> component
The main content of your app. Should be a direct descendant of `<Layout>`, and specified second in
source order (after Leftside).

Props:
  - **header**: The header of your app.


# Customization
Customization is fairly simple due to a modular approach to styling/theming.

> Even the theme 's got themes!

These subthemes are defined in the `_vars.scss` partial in `src/components/main/`.  
You can shadow this file together with the main `layout.scss` and modify the subtheme variables,
or create your own subthemes altogether!
