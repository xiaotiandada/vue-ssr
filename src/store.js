import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state() {
      return {
        list: [],
        title: "",
        des: "",
        img: ""
      };
    },
    mutations: {
      setLists(state, res) {
        state.list = res;
      },
      setMetaInfo(state, res) {
        state.title = res.title;
        state.des = res.des;
        state.img = res.img;
        // console.log(res);
      }
    },
    actions: {
      // store中的actions部分
      fetchLists({ commit }, data) {
        return axios
          .get("https://cnodejs.org/api/v1/topics?page=" + data.page)
          .then(res => {
            if (res.data.success) {
              // console.log(res.data.data);
              commit("setLists", res.data.data);
            }
          });
      },
      getMetaInfo({ commit }, data) {
        return axios
          .get("https://www.easy-mock.com/mock/5cc804f971639a150fce2fcd/api/")
          .then(res => {
            // console.log(res);
            commit("setMetaInfo", res.data.data);
          });
      }
    }
  });
}
