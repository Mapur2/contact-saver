import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addContact } from '../features/contactsSlice'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'


export default function AddContacts() {

    const [name, setName]=useState("")
    const [nickname,setNick]=useState("")
    const [number,setContact]=useState("")

    const nav=useNavigate()
    const handleSubmit =(e)=>{
       
        e.preventDefault()
        if(name=="" || !number)
        {
            alert("Enter All details")
            return
        }
          axios.post('http://localhost:3000/saver/api/createcontact',{
            name,
            nickname,
            number
          },
          {
            withCredentials:true
          })
          .then((res)=>{
              //console.log(res.data.contacts)
              setContact(res.data.contacts)
          }) 

        alert("Submitted")
        nav('/contacts')
    }

  return (
    <><Header/>
        <div
            className="mt-4 text-black justify-between align-middle mx-auto items-center px-4 py-2 rounded"
          >
            <h1 className=' text-white'>Add New Contact</h1>
            <form action="" type='submit'>
                <input type="text"
                 placeholder='Name' 
                 value={name}
                 onChange={e=>setName(e.target.value)}
                 className='rounded mx3 my-3 p-2'/><br />

                <input type="text" 
                placeholder='Nickname (Optoinal)'
                value={nickname}
                 onChange={e=>setNick(e.target.value)}
                className='rounded mx3 my-3  p-2'/> <br />

                <input type="number" 
                placeholder='Contact'
                value={number}
                 onChange={e=>setContact(e.target.value)}
                className='rounded mx3 my-3 p-2'/> <br />
                <button onClick={handleSubmit} className=' border-white bg-red-600 p-3'>Submit</button>
            </form>
    </div>
    <Footer/>
    </>
  )
}
