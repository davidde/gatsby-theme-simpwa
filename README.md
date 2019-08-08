# gatsby-theme-dualside
This theme attempts to provide a generic, re-usable and modular layout for developing
simple single-screen Progressive Web Applications with responsive sidebars on the left and right.

Focus is on:
- Single codebase that works optimally on both desktop and mobile
- Responsive design: should work on any viewport size
- Touch-friendly: sidebars should respond to swiping
- On mobile, the PWA should deliver an experience comparable to native apps
- Later on, we might want to enable the sidebars to be *user-resizable*


## Usage
There are only 4 simple components you need for building your app:
- `<Layout>`: The parent component that enables its 3 children components to work properly.
- `<Main>`: The main content of your app. Should be a direct descendant of `<Layout>`.
- `<Leftside>`: The **left sidebar** of your app. Should be a direct descendant of `<Layout>`.
  Can be omitted if you don't want a left sidebar.
- `<Rightside>`: The **right sidebar** of your app. Should be a direct descendant of `<Layout>`.
  Can be omitted if you don't want a right sidebar.

All three children components take a `header` prop to set the header for the component.  
On top of that, the sidebar components also take an `icon` prop that accepts a Font Awesome icon
from `@fortawesome/free-solid-svg-icons`.