import dva from 'dva';
import React from 'react';
import styles1 from './index.less';

export default ({count, dispatch}) => {
  return (
    <div className={styles1.normal}>
      <div className={styles1.record}>Highest Record: {count.record}</div>
      <div className={styles1.current}>{count.current}</div>
      <div className={styles1.button}>
        <button onClick={() => { dispatch({type: 'count/add'}); }}>+</button>
        <button onClick={() => { dispatch({type: 'count/minus'}); }}>-</button>
      </div>
    </div>
  );
};