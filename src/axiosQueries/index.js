import axios from 'axios';

axios.defaults.baseURL = 'https://api.bitnob.com/api/v1/';
//axios.defaults.baseURL = 'http://localhost:8080/api/v1/';
axios.defaults.validateStatus = (status) => {
  return status < 500; // Reject only if the status code is greater than or equal to 500
}

export default {
  postQuery(link, body) {
    return axios.post(link, body, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  },
  postWithHeader(link, body, token) {
    return axios.post(link, body, {
      headers: {
        'Authorization': 'JWT' + ' ' + token,
        'Content-Type': 'application/json'
      }
    });
  },
  getQuery(link) {
    return axios.get(link, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });   
  },
  getWithHeader(link, token) {
    return axios.get(link, {
      headers: {
        'Authorization': 'JWT' + ' ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });   
  },
  deleteWithHeader(link, token) {
    return axios.delete(link, {
      headers: {
        'Authorization': 'JWT' + ' ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }); 
  },
  putWithHeader(link, body, token) {
    return axios.put(link, body, {
      headers: {
        'Authorization': 'JWT' + ' ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }
}