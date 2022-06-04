import { createStore } from "vuex";
import axios from "../axios-auth";

const store = createStore({
  state() {
    return {
      token: null,
      loggedInUser: {
        userId: 0,
        username: "",
        fullname: "",
        roles: [],
        dayLimit: 0.0,
        transactionLimit: 0.0,
        remainingDayLimit: 0.0,
      },
      errorMessage: "",
    };
  },
  getters: {
    isAuthenticated(state) {
      return state.token != null;
    },
    // isAdmin(state) {
    //     return state.userType == 1;
    // }
  },
  mutations: {
    removeToken(state) {
      state.token = null;
    },
    setToken(state, parameters) {
      state.token = parameters.token;
    },
    setLoggedInUser(state, parameters) {
      state.loggedInUser.userId = parameters.userId;
      state.loggedInUser.username = parameters.username;
      state.loggedInUser.fullname = parameters.fullname;
      state.loggedInUser.roles = parameters.roles;
      state.loggedInUser.dayLimit = parameters.dayLimit;
      state.loggedInUser.transactionLimit = parameters.transactionLimit;
      state.loggedInUser.remainingDayLimit = parameters.remainingDayLimit;
    },
    logout(state) {
      state.jwt = null;
      state.username = null;
    },
  },
  actions: {
    setLogin({ commit }) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("token");
      axios
        .get("/users/loggedInUser")
        .then((response) => {
          console.log(response.data);
          commit("setLoggedInUser", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    autoLogin({ commit }) {
      let token = localStorage.getItem("token");

      if (token) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        commit("setToken", {
          token: token,
        });
      }
    },
    logout({ commit }) {
      // set token in store to null
      commit("removeToken");
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.clear();
      commit("logout");
    },
    login({ commit }, parameters) {
      return new Promise((resolve, reject) => {
        axios
          .post("/users/login", {
            username: parameters.username,
            password: parameters.password,
          })
          .then((result) => {
            axios.defaults.headers.common["Authorization"] =
              "Bearer" + result.data.token;

            localStorage.setItem("token", result.data.token);
            console.log("token from api: " + result.data.token);
            commit("setToken", {
              token: result.data.token,
            });
            resolve();
          })
          .catch((error) => reject(error));
      });
    },
  },
});

export default store;
