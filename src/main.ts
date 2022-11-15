import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "./plugins/axios";

import { store } from "./store";

import "./assets/main.css";

const app = createApp(App);

app.use(router, axios);
app.use(store);

app.mount("#app");
