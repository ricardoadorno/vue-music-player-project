import { Store } from "vuex";

declare module "@vue/runtime-core" {
  interface State {
    PlaylistsArray: Array<{
      id: number;
      url: string;
      picUrl: string;
      name: string;
      playlist: Array<{
        id: number;
        name: string;
        artist: string;
        album: string;
        duration: number;
      }>;
    }>;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
