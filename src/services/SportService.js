import api from '@/services/api'

export default {
  fetchPosts () {
    return api().get('sport')
  },
  addNewPost (params) {
    return api().post('sport', params)
  }
}
