import CommonModel from './common'

export default class AppModel {
    
  apps(params) {
    console.log(CommonModel);
    const url = 'http://grimlock.corp.rs.com/api/appf2es/';
    return new Promise((resovle, reject)=> {
      CommonModel.get(url, params).then((data) => {
        resovle(data.results);
      }).catch(reject);
    });
  }

}

