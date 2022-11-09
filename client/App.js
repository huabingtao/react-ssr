import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import NoMatch from "./pages/noMatch/index";
import routers from "./router";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        {
          routers.map((item,index)=>(<Route key={index} path={item.path} element={
            <Suspense fallback={
              <div>路由懒加载...</div>
            }>
              <item.element />
            </Suspense>
          } />))
        }
          {/* <Route index element={<Home />} />
          <Route path="about" element={<About></About>} />
          <Route path="*" element={<NoMatch></NoMatch>} /> */}
        </Route>
      </Routes>
    </div>
  );
}

