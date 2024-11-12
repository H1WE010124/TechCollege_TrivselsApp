// routes.js
import { Admin } from "../pages/Admin";
import { Landing } from "../pages/Landing/Landing";
import { Login } from "../pages/login";
import HomePage from "./../pages/HomePage";

const routes = [
  {
    path: "/",
    component: Landing,
    exact: true,
  },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/start",
    component: Login,
  },
];

export default routes;
