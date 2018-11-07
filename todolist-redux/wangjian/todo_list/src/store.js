import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    doing: [],
    done: []
  },
  getters: {},
  mutations: {
    push(state, obj) {
      state[obj.state].push(obj.value);
    },
    remove(state, obj) {
      state[obj.state].splice(obj.index, 1);
    },
    clear(state) {
      state.doing = [];
      state.done = [];
    }
  },
  actions: {}
});
