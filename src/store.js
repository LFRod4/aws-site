import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    signedIn: false,
    logInAttempt: false
  },
  getters: {
    signedIn: state => {
      return state.signedIn;
    }
  },
  mutations: {
    checkSignedIn: (state, boolean) => {
      state.signedIn = boolean;
    },
    checkLogIn: (state, boolean) => {
      state.logInAttempt = boolean;
    }
  },
  actions: {}
});
