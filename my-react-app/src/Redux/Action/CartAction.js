import axios from 'axios';
import{
   ADD_TO_CART,
   REMOVE_CART_ITEM,
} from '../Constants/CartConstant';


export const addItemToCart = (id,quantity)=> async(dispatch,getState)=>
// console.log("hello")
{
   
      const link =`/api/productview/${id}`
      const  {data}  = await axios.get(link);
      // console.log(data)
      dispatch({
         type:ADD_TO_CART,
         payload:{
            product:data.data._id,
            product_name:data.data.product_name,
            price:data.data.price,
            image:data.data.image.url,
            stock:data.data.stock,
            quantity,
         }
         
      })
      localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}
// export const removeCartItem =(id)=>async()=>
// {

// }

