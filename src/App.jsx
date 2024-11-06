
import './App.css'
import Navbar from './Components/Shered/Navbar'
import Banner from './Components/Pages/Home_Page/Banner/Banner'
import OurExperiance from './Components/Pages/Home_Page/OurExperiance/OurExperiance'
import Horizion from './Components/Pages/Home_Page/Horizion/Horizion'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <div className=''>
        <ToastContainer></ToastContainer>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
