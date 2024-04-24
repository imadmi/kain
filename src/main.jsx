import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Splash from './components/Splash.jsx'
import Welcome from './components/Welcome.jsx';
import Profile from './components/profile.jsx';
import SignIn from './components/SignIn.jsx';
import Otp from './components/Otp.jsx';
import Home from './components/Home.jsx';
import Recording from './components/Recording.jsx';
import Upload from './components/Upload.jsx';
import Searching from './components/Searching.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/welcome",
    element: <Welcome  />,
  },
  {
    path: "/profile",
    element: <Profile />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/otp",
    element: <Otp />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/recording",
    element: <Recording />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/searching",
    element: <Searching />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
