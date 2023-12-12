import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    contacts: [
        /* {
            id: 1,
            name: "Hello",
            contact: 123,
            nickname: "My"
        },
        {
            id: 2,
            name: "Hello 2 ",
            contact: 123,
            nickname: ""
        } */
    ]
}



export const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action) => {
            /* const NewContact = {
                id: nanoid(),
                name: action.payload.name,
                contact: action.payload.contact,
                nickname: action.payload.nickname
            } */
            state.contacts= action.payload
            console.log(state.contacts)
        },
        removeContact: (state, action) => {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload)
        },
        sortContact: (state, action) => {
            state.contacts = state.contacts.sort((a, b) => a.name.localeCompare(b.name))
        }
    }
})


export const { addContact, removeContact, sortContact } = contactSlice.actions



export default contactSlice.reducer