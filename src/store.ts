import { createStore } from "vuex";

const store = createStore({
  state: {
    playlistState: [
      { id: 1, name: "List 1" },
      { id: 2, name: "List 2" },
      { id: 3, name: "List 3" },
    ],
  },
  mutations: {},
});

export default store;
