import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import store from "./store";
import vuetify from "./plugins/vuetify";
import router from "./router";

createApp(App).use(router).use(store).use(vuetify).mount("#app");
