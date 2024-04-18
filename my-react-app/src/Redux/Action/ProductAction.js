import axios from 'axios';
import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    
} from '../Constants/ProductConstant';

export const getproduct = ()=> async(dispatch)=>
{
   try 
   {
     dispatch({type:ALL_PRODUCT_REQUEST});
     const link = "/api/productdisplay";
     const {data} = await axios.get(link)
    //  console.log(data)

     dispatch({type:ALL_PRODUCT_SUCCESS,payload:data})


   } 
   catch (error) 
   {
     dispatch({type:ALL_PRODUCT_FAIL,payload:error.response.data.message})
   }
   
}

export const getproductdetail = (id)=> async(dispatch)=>
{
  try
   {
    dispatch({type:PRODUCT_DETAILS_REQUEST})
    const link = `/api/productview/${id}`
    // console.log(link)
    const {data}= await axios.get(link)
    console.log(data)
    dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data})
  } 
  catch (error) 
  {
    dispatch({type:PRODUCT_DETAILS_FAIL,payload:error.response.data.message})
  }

}