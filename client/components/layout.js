import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import AuthProvider from "./authProvider";

export default function () {
  return (<>
    <AuthProvider>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
          </ul>
        </nav>
        <Outlet></Outlet>
    </AuthProvider>    
  </>)
}