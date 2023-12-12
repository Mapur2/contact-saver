import { configureStore } from '@reduxjs/toolkit'
import  contactSlice from '../features/contactsSlice'
import authSlice from '../features/authSlice'


export const store = configureStore({
    reducer: {
        auth : authSlice,
        contact : contactSlice
    }

});

