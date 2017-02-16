/**
 * Created by Admin on 2017/2/4.
 */
const STORAGE_KEY = 'todo-vuejs'
export default {
  fetch: function () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: function (items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}
