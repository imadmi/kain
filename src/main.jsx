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
import ProfileConfigurator2 from './components/ProfileConfigurator2.jsx';
import ProfileConfigurator3 from './components/ProfileConfigurator3.jsx';
import HomeRetailers from './components/HomeRetailers.jsx';
import Demandes from './components/Demandes.jsx';

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
  {
    path: "/profileConfigurator2",
    element: <ProfileConfigurator2 />,
  },
  {
    path: "/profileConfigurator3",
    element: <ProfileConfigurator3 />,
  },
  {
    path: "/homeretailers",
    element: <HomeRetailers />,
  },
  {
    path: "/demandes",
    element: <Demandes />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
