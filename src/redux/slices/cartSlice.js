import { createSlice } from "@reduxjs/toolkit";


const initialState={
    items:[],
    total:0,
    products:[]
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
           const existingItem=state.items.find((item)=>item.id===action.payload.id)
           if(existingItem){
              if(existingItem.quantity===5) return
              existingItem.quantity++
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
        calculateTotal:(state,action)=>{
         state.total=action.payload
        },
        setProducts:(state,action)=>{
         state.products=action.payload
        }
    }
})
export const {addToCart,clearCart,decreaseQuantity,increaseQuantity,removeItem,calculateTotal,setProducts}=cartSlice.actions
export default cartSlice.reducer
