import * as React from 'react'
import About from "../pages/about";
import Home from "../pages/home";
import NoMatch from "../pages/noMatch";

const routers = [{
  index:true,
  path: '/',
  element: <Home />
},{
  path: '/about',
  element: <About />
},{
  path: '*',
  element: <NoMatch />
}]

export default routers