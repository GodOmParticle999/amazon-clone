import { createSlice } from "@reduxjs/toolkit";


const initialState={
    items:[],
    total:0
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
           const existingItem=state.items.find((item)=>item.id===action.payload.id)
           if(existingItem){
            existingItem.quantity+=action.payload.quantity
           } 
          else { state.items.push(action.payload)}
        },
        increaseQuantity:(state,action)=>{
           const item= state.items.find((item)=>item.id===action.payload.id)
           if(item.quantity<5){
            item.quantity+=1
           }
        }
        ,
        decreaseQuantity:(state,action)=>{
           const item= state.items.find((item)=>item.id===action.payload.id)
           if(item.quantity>1){
            item.quantity-=1
           }
        }
        ,
        
        removeItem:(state,action)=>{
         state.items=state.items.filter((item)=>item.id!==action.payload)
        }
        ,
        clearCart:(state)=>{
           
           state.items=[]
        },
        
    }
})
export const {addToCart,clearCart,decreaseQuantity,increaseQuantity,removeItem}=cartSlice.actions
export default cartSlice.reducer
