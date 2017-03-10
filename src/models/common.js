"use strict";
import 'whatwg-fetch';
import _ from 'lodash';
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
function parseJSON(response) {
  return response.json()
}

export default class Http {

  static get(url, params = {}) {
    let param = [];
    _.keys(params).forEach((key) => {
      param.push(`${key}=${params[key]}`)
    });
    let options = {
      method: 'get',
      credentials: 'same-origin',
    }
    return new Promise((resolve, reject)=> {
      fetch(`${url}?${param.join('&')}`, options)
        .then(checkStatus)
        .then(parseJSON)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    })

  }

  static post(url, options = {}) {
    let _options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    };
    if (options.data) {
      _options.body = JSON.stringify(options.data);
    }
    return new Promise((resovle, reject)=> {
      fetch(url, _options)
        .then(checkStatus)
        .then(parseJSON)
        .then((data) => {
          resovle(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
