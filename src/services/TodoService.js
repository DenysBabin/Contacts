import api from '@/services/api'

export default {
  fetchTodos () {
    return api().get('todo')
  },
  addNewTodo (params) {
    return api().post('todo', params)
  },
  deleteTodo (id) {
    return api().delete('todo/' + id)
  }

  // updatePost (params) {
  //   return Api().put('posts/' + params.id, params)
  // },
  //
  // getPost (params) {
  //   return Api().get('post/' + params.id)
  // }
}
