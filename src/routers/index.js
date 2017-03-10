import React from 'react';
import { Router, Route } from 'dva/router';
import Layout1 from '../modules/layout/layout1'
import Layout2 from '../modules/layout/layout2'
import Layout3 from '../modules/layout/layout3'
import CountPage from './count'

export default ({ history }) =>
  <Router history={history}>
    <Route path="/download" component={CountPage} />
    
    <Route path="/" component={Layout1} >
      <Route path=":app" component={Layout2} >
        <Route path=":module" component={Layout3} />
      </Route>
    </Route>
  </Router>
