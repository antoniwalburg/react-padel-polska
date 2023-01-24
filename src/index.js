import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/About';
import Blog from './pages/Blog';
import Videos from './pages/Videos'
import Contact from './pages/Contact'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "blog",
    element: <Blog/>,
  },
  {
    path: "videos",
    element: <Videos/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
