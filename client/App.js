import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import NoMatch from "./pages/noMatch/index";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About></About>} />
          <Route path="*" element={<NoMatch></NoMatch>} />
        </Route>
      </Routes>
    </div>
  );
}

