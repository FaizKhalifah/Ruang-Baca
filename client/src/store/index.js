import { createStore } from 'vuex'

export default createStore({
  state: {
    user:null,
    token:null
  },
  getters: {
    isAuthenticated: (state) => !!state.token, // Mengecek apakah user sudah login
    userId: (state) => state.user?._id // Mengambil userId dari state
  },
  mutations: {
    setUser(state,user){
      state.user= user;
    },
    setToken(state,token){
      state.token=token
    },
    logout(state){
      state.user=null,
      state.token=null
    }
  },
  actions: {
    login({ commit }, userData) {
      commit('setUser', userData.user);
      commit('setToken', userData.token);
    },
    logout({ commit }) {
      commit('logout');
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
    }
  },
  modules: {
  }
})
