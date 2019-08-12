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
(Coming soon)


## Usage
The theme provides 4 simple components to build your app; a parent `<Layout>` component,
and its 3 children, `<Leftside>`, `<Main>` and `<Rightside>`.

### <Layout>
The parent component that enables its 3 children components to work properly.

Props:
- **theme**: The theme to use for your app. Defaults to 'default-theme'.

### <Main>
The main content of your app. Should be a direct descendant of `<Layout>`.

Props:
- **header**: The header of your app.

### <Leftside>
The **left sidebar** of your app. Should be a direct descendant of `<Layout>`.
Can be omitted if you don't want a left sidebar.

Props:
- **header**: The header of the left sidebar.
- **icon**: Font Awesome icon from `@fortawesome/free-solid-svg-icons`
  that triggers the left sidebar.

### <Rightside>
The **right sidebar** of your app. Should be a direct descendant of `<Layout>`.
Can be omitted if you don't want a right sidebar.

Props:
- **header**: The header of the right sidebar.
- **icon**: Font Awesome icon from `@fortawesome/free-solid-svg-icons`
  that triggers the right sidebar.


## Customization
Customization is fairly simple due to a modular approach to styling/theming.

> Even the theme 's got themes!

Each theme consists of 3 .scss partials: a 'colors', 'specs', and 'styles' file,
which define color variables, spec variables (like sizes and media queries), and
the general styles of the theme respectively.
You can shadow any of these files for a quick change, or create your personal
theme by putting together 3 modified partials.