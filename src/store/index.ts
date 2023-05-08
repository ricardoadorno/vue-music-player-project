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
          songs: [
            {
              id: 0,
              name: "123",
              artist: "",
              album: "",
              duration: 0,
            },
            {
              id: 1,
              name: "123",
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
          songs: [
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
          songs: [
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
      currentPlaylist: 0,
    };
  },
  mutations: {},
  actions: {
    setCurrentPlaylist(context, payload) {
      console.log(payload);

      context.state.currentPlaylist = payload;
    },
  },
});

export default store;
