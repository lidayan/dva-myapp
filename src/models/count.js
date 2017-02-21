import dva from 'dva';
import key from 'keymaster';

export default {
  namespace: 'count',
  state: {
    record : 0,
    current: 0,
  },
  reducers: {
    add(state) {
      return { ...state,
        record: state.record + 1,
        current: state.current + 1,
      };
    },
    minus(state) {
      return { ...state, 
        record: state.record + 1,
        current: state.current - 1,
      };
    },
  },
  // effects: {
  //   *add(action, { call, put }) {
  //     yield call(delay, 1000);
  //     yield put({ type: 'minus' });
  //   },
  // },
  subscriptions: {
    keyboardWatcher({ dispatch }) {
      key('⌘+up, ctrl+up', () => { dispatch({type:'add'}) });
    },
  },
}

function delay(timeout){
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}