
import './App.css'
import Contacts from './components/Contacts'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
function App() {
  const token = localStorage.getItem('token')
  console.log(token)
  return (
    <>
      {/* {
        token === null ? <Outlet/> : (
          <>
            <Contacts/>
          </>)
      } */}
    
      <Outlet/>
      
    </>
  )
}

export default App
