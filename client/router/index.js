import * as React from 'react'
import RequireAuth from '../components/RequireAuth';
import About from "../pages/about";
import Home from "../pages/home";
import Login from '../pages/login';
import NoMatch from "../pages/noMatch";

const routers = [{
  index:true,
  path: '/',
  element: <Home />
},{
  path: '/about',
  element: <RequireAuth>
    <About></About>
  </RequireAuth>
},{
  path: '/login',
  element: <Login />
},{
  path: '*',
  element: <NoMatch />
}]

export default routers