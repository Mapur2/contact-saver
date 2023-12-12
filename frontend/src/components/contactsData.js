
import { useSelector, useDispatch } from 'react-redux'
import { addContact, removeContact,sortContact } from '../features/contactsSlice'
import axios from 'axios'
import { useEffect, useState } from 'react'
axios.defaults.withCredentials=true

export default function contactData() {
   
   const [contacts,setContacts]=useState([])
    useEffect(()=>{
            axios.get('http://localhost:3000/saver/api/all')
            .then((res)=>{
                //console.log(res.data.contacts)
                setContacts(res.data.contacts)
            }) 
           
    },[]) 
    return contacts
}