import React, {lazy} from 'react'
import RequireAuth from '../components/RequireAuth';
import About from "../pages/about";
import Home from "../pages/home";
import Login from '../pages/login';
import NoMatch from "../pages/noMatch";
const AboutLazy = lazy(()=> import('../pages/about'))
const RequireAuthLazy = lazy(()=> import('../components/RequireAuth'))

const routers = [{
  index:true,
  path: '/',
  element: lazy(() => import('../pages/home'))
},
{
  path: '/about',
  element: lazy(()=> import('../pages/about'))
},
{
  path: '/login',
  element: lazy(()=> import('../pages/login'))
},{
  path: '*',
  // element: <NoMatch />
  element: lazy(()=> import('../pages/noMatch'))
}]

export default routers