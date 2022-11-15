import { createStore } from "vuex";
import userService from "../services/usersService";
export const store = createStore({
  state() {
    return {
      users: {
        loading: false,
        content: [],
      },
    };
  },
  mutations: {
    setUsers(state, users) {
      state.users.content = users;
    },
    setLoading(state, isLoading) {
      state.users.loading = isLoading;
    },
  },
  actions: {
    async fetchUsers({ commit }, { searchParam }) {
      if (!searchParam) {
        commit("setUsers", []);
        return;
      }

      commit("setLoading", true);
      const users = await userService.fetch(searchParam);
      commit("setUsers", users);
      commit("setLoading", false);
    },
  },
});
