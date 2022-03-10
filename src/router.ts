/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./views/About.vue"),
  },
  {
    path: "/:path(.*)",
    name: "notfound",
    component: () => import("./views/NotFound.vue"),
  },
];
