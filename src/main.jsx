import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home.jsx'
import Welcome from './components/Welcome.jsx';
import Profile from './components/profile.jsx';
import SignIn from './components/SignIn.jsx';

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/welcome",
    element: <Welcome  />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
    // errorElement: <ErrorPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
