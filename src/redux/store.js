import { combineReducers, configureStore } from "@reduxjs/toolkit"; 
import cartReducer from './slices/cartSlice'
import userReducer from './slices/userSlice'
const rootReducer=combineReducers({
    cart:cartReducer,
    user:userReducer
})
const store=configureStore({
    reducer:rootReducer
})

export default store