import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';
import fetch from 'dva/fetch';
import React from 'react';
import './index.html';
import Count from './models/count'
import AppRouter from './routers'

// 1. Initialize
const app = dva();

// 2. Model
app.model(Count);

// 3. Router
app.router(AppRouter);

// 4. Start
app.start('#root');