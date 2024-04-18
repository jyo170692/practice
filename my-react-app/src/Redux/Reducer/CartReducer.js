import{
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
 } from '../Constants/CartConstant';

 export const cartReducer = (state={cartItems:[]},action)=>
 {
       switch(action.type)
       {
        case ADD_TO_CART:
            const item = action.payload;
           
            const isItemExists = state.cartItems.find(
                (i)=> i.product === item.product
               
            );
         
            if(isItemExists){
                return{
                    ...state,
                cartItems:state.cartItems.map((i)=>
                i.product === item.product?item:i)
            }
            }
            else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]
                };
            }
            default:
                return state
            
       }
 }