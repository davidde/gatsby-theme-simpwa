import React from 'react'
import { Link } from 'gatsby'


const NotFound = () =>
  <div>
    <h1>404: Page not found</h1>
    <p>
      Oops! The page you are looking for has been removed or relocated.
    </p>
    <Link to="/">
      <p>Go Back</p>
    </Link>
  </div>

export default NotFound;