import React from 'react'
import { Outlet } from "react-router-dom";

// This is the example of Outlet component of React-Router-Hooks Slide no 19
function Layout() {
  return (
    <div>
      <nav>Navigation</nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}


export default Layout