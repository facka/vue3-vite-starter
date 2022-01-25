import { reactive } from 'vue'

export default {
  state: () => ({
    name: 'Test',
    permissions: {}
  }),
  getters: {},
  mutations: {
    SET_NAME(state, payload) {
      state.name = payload
    },
    SET_PERMISSION(state, payload) {
      console.log('set permission: ', payload)
      console.log('1) permissions: ', state.permissions)
      state.permissions[payload] = true
      console.log('2) permissions: ', state.permissions)
    },
    REMOVE_PERMISSION(state, payload) {
      state.permissions[payload] = false
    },
    CLEAR_PERMISSIONS(state) {
      state.permissions = {}
    }
  },
  actions: {
    saveName({ commit }, data) {
      commit('SET_NAME', data)
    },
    login({ commit }, data) {
      commit('SET_NAME', data)
      console.log('data: ', data)
      if (data == 'admin') {
        commit('SET_PERMISSION', 'admin')
      }
      localStorage.setItem('user', data);
    },
    logout({ commit }, data) {
      commit('SET_NAME', '')
      commit('CLEAR_PERMISSIONS')
      localStorage.setItem('user', '');
    }
  }
}