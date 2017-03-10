import CommonModel from './common'

export default class IssueModel {
    
  issues(params) {
    const url = 'http://grimlock.corp.rs.com/api/issues/';
    return new Promise((resovle, reject)=> {
      CommonModel.get(url, params).then((data) => {
        resovle(data.results);
      }).catch(reject);
    });
  }

}

