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
    protected: false,
  },
  {
    path: "/admin",
    component: AdminPage,
    protected: false,
  },
  {
    path: "/login",
    component: AdminLoginPage,
    protected: false,
  },
  {
    path: "/start",
    component: QuestionPage,
    protected: false,
  },
];

export default routes;
