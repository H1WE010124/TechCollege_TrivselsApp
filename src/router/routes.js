// routes.js
import { Admin } from "../pages/Admin";
import { Login } from "../pages/login";
import { QuestionPage } from "../pages/QuestionPage";
import HomePage from "./../pages/HomePage";

const routes = [
  {
    path: "/",
    component: HomePage,
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
    path: "/question",
    component: QuestionPage,
  },
];

export default routes;
