import axios from 'axios'
export default () => {
  return axios.create({
    // baseURL: 'http://denbabinis.com:4000'
    baseURL: 'http://localhost:4000'
  })
}
