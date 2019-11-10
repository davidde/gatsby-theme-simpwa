import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/common/seo';


const NotFound = () => (
  <div>
    <SEO title='404: Not found' />
    <h1>404: Page not found</h1>
    <p>
      The page you are looking for does not exist ...
    </p>
    <Link to='/'>
      <p>Go Back</p>
    </Link>
  </div>
)

export default NotFound;