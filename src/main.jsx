import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Pages/Home_Page/Home/Home.jsx';
import Contact from './Components/Pages/Contact_Page/Contact.jsx';
import About from './Components/Pages/About_Page/About.jsx';
import Details from './Components/Pages/Details_Page/Details.jsx';
import Login from './Components/Pages/Login_Page/Login.jsx';
import Signup from './Components/Pages/Signup_Page/Signup.jsx';
import AuthProvider from './providers/AuthProvider/AuthProvider.jsx';
import PrivateRout from './Components/Shered/Privaterout/Privaterout.jsx';
import ErrorPage from './Components/Shered/ErrorPage/ErrorPage.jsx';
import AddEstates from './Components/Pages/AddEstates/AddEstates.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: ()=> {return fetch('https://elysian-estates-backend-django.onrender.com/properties/')}
        // loader: () => {return fetch('estest.json')}
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },
      {
        path:"/addestates",
        element: <AddEstates></AddEstates>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:`/estates/:id`,
        // element: <PrivateRout><Details></Details></PrivateRout>,
        element: <Details></Details>,
        loader: ({ params }) => {
          return fetch(`https://elysian-estates-backend-django.onrender.com/properties/${params.id}/`)}
  
      },
      {
        path:`/signin`,
        element: <Login></Login>
      },
      {
        path:`/signup`,
        element: <Signup></Signup>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
