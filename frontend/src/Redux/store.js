import { configureStore } from '@reduxjs/toolkit'
import { ContactApi } from './Service/contactService'

const store = configureStore({
  reducer: {
    [ContactApi.reducerPath] : ContactApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ContactApi.middleware)
  
})

export default store