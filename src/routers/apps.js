import React from 'react';
import { Router, Route } from 'dva/router';
import HomePage from '../components/homepage'
import Layout from '../components/layout'
import CountPage from './count'

export default ({ history }) =>
  <Router history={history}>
    <Route path="/" component={HomePage} />
    <Route path="/count" component={CountPage} />
    <Route path="/layout" component={Layout} />
  </Router>
