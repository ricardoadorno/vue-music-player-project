import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { store, key } from "./store";
import vuetify from "./plugins/vuetify";
import router from "./router";

createApp(App).use(router).use(store, key).use(vuetify).mount("#app");
