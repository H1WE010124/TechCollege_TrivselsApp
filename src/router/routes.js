// routes.js
import { Admin } from '../pages/Admin';
import { Login } from '../pages/login';
import HomePage from './../pages/HomePage';  
import {Charts} from './../pages/Chart';

const routes = [
    {
      path: '/',
      component: HomePage,
      exact: true,  
    },
    {
      path: '/admin',
      component: Admin,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/Chart',
      component: Charts,
    },
  ];
  
  export default routes;