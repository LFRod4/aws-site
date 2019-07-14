import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    signedIn: false,
    modal: false
  },
  getters: {
    signedIn: state => {
      return state.signedIn;
    }
  },
  mutations: {
    signIn: (state, user) => {
      state.signedIn = !!user;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    checkSignedIn: (state, boolean) => {
      state.signedIn = boolean;
    },
    modal: (state, boolean) => {
      state.modal = boolean;
    },
    checkUser: (state, status) => {
      state.user = status;
    }
  },
  actions: {}
});
