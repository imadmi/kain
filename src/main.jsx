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
import Availability from './components/Availability.jsx';
import NewChat from './components/NewChat.jsx';
import ListSales from './components/ListSales.jsx';
import Test from './components/Test.jsx';
import CategorySelector from './components/CategorySelector.jsx';
import SubCategorySelector from './components/SubCategorySelector.jsx';
import ProfileConfigurator1 from './components/ProfileConfigurator1.jsx';

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
  {
    path: "/availability",
    element: <Availability />,
  },
  {
    path: "/newchat",
    element: <NewChat />,
  },
  {
    path: "/listsales",
    element: <ListSales />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/categoryselector",
    element: <CategorySelector />,
  },
  {
    path: "/subcategoryselector",
    element: <SubCategorySelector />,
  },
  {
    path: "/profileConfigurator1",
    element: <ProfileConfigurator1 />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
