import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeContact,sortContact } from '../features/contactsSlice'
import { Link } from 'react-router-dom'
import contactData from './contactsData'
import Cookies from 'universal-cookie'
import Footer from './Footer'
import Header from './Header'
export default function Contacts() {

    //const contacts = useSelector(state => state.contacts)
    //console.log(contacts)

    const contacts =contactData()

    console.log("components ",contacts)
    return (
        <>
        <Header/>
        <div className='bg-dark-200 right-0  items-center mx-auto w-3/4 m-2'>
            <h1 className=' shadow-indigo-200'>Your Contacts</h1>
            <div className='flex'>
{/*                 <button className=' bg-purple-400 rounded mx-2 px-2 py-2 border-stone-50' >

                    <Link to='/addContact'>Add Contact </Link>
                </button>
                <button onClick={()=>dispatch(sortContact())} className=' bg-purple-400 rounded flex px-2 py-2 border-stone-50' >
                    Sort (A-Z)
                </button> */}
            </div>
            <div>
                <ul className="list-none">
                     {
                        contacts? contacts.map((contact) => (
                            <li
                                className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                                key={contact._id}
                            >
                                <div className='text-white'>{contact.name} {contact.nickname ? `(${contact.nickname})` : ""}</div>
                                <div className='text-white'>{contact.contact} </div>
                                <button
                                    onClick={() => dispatch(removeContact(contact.id))}
                                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </li>
                        )
                        ):""
                    }
                    
                </ul>
            </div>
        </div>
        <Footer/>
    </>
    )
}
