import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      PlaylistsArray: [
        {
          id: 1,
          url: "",
          picUrl: "",
          name: "Playlist 1",
          playlist: [
            {
              id: 0,
              name: "",
              artist: "",
              album: "",
              duration: 0,
            },
          ],
        },
        {
          id: 2,
          url: "",
          picUrl: "",
          name: "Playlist 2",
          playlist: [
            {
              id: 0,
              name: "",
              artist: "",
              album: "",
              duration: 0,
            },
          ],
        },
        {
          id: 3,
          url: "",
          picUrl: "",
          name: "Playlist 3",
          playlist: [
            {
              id: 0,
              name: "",
              artist: "",
              album: "",
              duration: 0,
            },
          ],
        },
      ],
    };
  },
  mutations: {},
  actions: {},
});

export default store;
