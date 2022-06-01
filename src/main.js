import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import UserPage from "./components/users/UserPage.vue";
import EditUserDetails from "./components/users/EditUserDetails.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/profile", component: UserPage },
  { path: '/edituser/:id', component: EditUserDetails, props: true  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
