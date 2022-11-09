import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import AuthStatus from "./AuthStatus";

export default function () {
  return (<>
    <AuthProvider>
      <AuthStatus></AuthStatus>
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