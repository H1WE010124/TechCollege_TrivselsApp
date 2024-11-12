// routes.js
import { AdminPage } from "../pages/AdminPage/AdminPage";
import { AdminLoginPage } from "../pages/AdminLoginPage/AdminLoginPage";
import { LandingPage } from "../pages/LandingPage/LandingPage";
import { QuestionPage } from "../pages/QuestionPage/QuestionPage";

const routes = [
  {
    exact: true,
    index: true,
    component: LandingPage,
  },
  {
    path: "/admin",
    component: AdminPage,
  },
  {
    path: "/login",
    component: AdminLoginPage,
  },
  {
    path: "/start",
    component: QuestionPage,
  },
];

export default routes;
