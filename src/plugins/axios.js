import Vue from 'vue'
import axios from 'axios'

const firebaseApi = axios.create({
  baseURL: 'http://localhost:5000/vvvf-f26a8/us-central1/',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
})

firebaseApi.interceptors.request.use(function (config) {
  config.headers.authorization = Math.random()
  return config
}, function (error) {
  return Promise.reject(error)
})

Vue.prototype.$firebaseApi = firebaseApi
