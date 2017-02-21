import React from 'react';
import dva, { connect } from 'dva';
import CountApp from '../components/count'



export default connect((state) => ({count: state.count}))(CountApp);