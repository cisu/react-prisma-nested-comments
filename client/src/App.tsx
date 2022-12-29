import React, { StrictMode } from 'react'

import {
  Outlet,
  RouterProvider,
  Link,
  createReactRouter,
  createRouteConfig,
} from '@tanstack/react-router'

import './App.css';

// import { createRoot } from "react-dom/client";

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

import PostList from './components/PostList';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<PostList />,
//   },
//   {
//     path: "/post/:id",
//     element:  <PostList />,
//   },
// ]);


const rootRoute = createRouteConfig({
  component: () => (
    <>
      <div>
        <Link to="/">Home</Link> <Link to="/posts/:id">Posts</Link>
      </div>
      <hr />
      <Outlet />
    </>
  )
})


const indexRoute = rootRoute.createRoute({
  path: '/',
  component: PostList,
})

const aboutRoute = rootRoute.createRoute({
  path: '/posts/:id',
  component: PostList
})

const routeConfig = rootRoute.addChildren([indexRoute, aboutRoute])

const router = createReactRouter({ routeConfig })


function App() {
  return (
    <div className='container'>
      {/* <RouterProvider router={router} /> */}
      {/* <PostList /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
