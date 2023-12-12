import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AddContacts from './components/AddContacts.jsx'
import Contacts from './components/Contacts.jsx'
import Login from './components/Login.jsx'
import Hero from './components/Hero.jsx'
import Register from './components/Register.jsx'


const token = localStorage.getItem('token')
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {token==null?
      <Route path='/' element={<Hero />} /> : <Route path='/' element={<Contacts />}/>}
       <Route path='/hero' element={<Hero />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register/>}/>
      
       <Route path='/contacts' element={<Contacts />}/>
      <Route path='/addcontact' element={<AddContacts />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
