import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './views/app/App'
import About from './views/about/About'
import Home from './views/home/Home'
import NotFound from './views/not-found/NotFound'

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute title='App' component={Home} />
    <Route path='about' title='App - About' component={About} />
    <Route path='*' title='404: Not Found' component={NotFound} />
  </Route>
);

export default routes;
