import { createApp } from "vue";
import("./assets/styles/index.css");
import App from "./App.vue";

import { routes } from "./router.js";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory("/mikalai2006vuecv/"),
  routes,
});
app.use(router);

app.mount("#app");
