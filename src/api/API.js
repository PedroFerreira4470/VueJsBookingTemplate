import axios from 'axios'
export default axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 5000,
  json: true
})
