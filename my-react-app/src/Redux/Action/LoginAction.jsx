// import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILS,CLEAR_ERRORS } from "../Constants/LoginConstant";
// import axios from 'axios';
// import {React} from 'react'
// export const login = (email,password) => async(dispatch) => {
//     try
//     {
//         dispatch({type:LOGIN_REQUEST})
        
//         let link = "https://ecapi.onrender.com/api/loginverify";
//         const  { data }  = await axios.post(link,{email,password})
//           console.log(data)
//         dispatch({
//             type:LOGIN_SUCCESS,
//             payload:data.user
//         })
//     } 
//     catch (error) 
//     {
//         dispatch({type:LOGIN_FAILS,payload:error.response.data.message})
//     }
    
// }
// export const clearError = () => async(dispatch)=>
// {
    // dispatch({type:CLEAR_ERRORS})
// }





import
{
    LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILS,CLEAR_ERRORS,LOAD_USER_SUCCESS,LOAD_USER_REQUEST,LOAD_USER_FAIL,LOGOUT_SUCCESS,LOGOUT_FAIL} from '../Constants/LoginConstant'
import axios from 'axios';

export const login = (email,password)=> async (dispatch) => {
  try {
      dispatch({ type:LOGIN_REQUEST});

      const link = '/api/loginverify'
    //    console.log(link)
      const { data } = await axios.post(link,{email,password});  // Use 'data' to extract the response data
      
    //   console.log( data );

      dispatch({
          type: LOGIN_SUCCESS,
          payload: data.data
      });
  } catch (error) {
      dispatch({
          type: LOGIN_FAILS,
          payload: error.response.data.message  // Use 'data' to access the error message
      });
  }
};

export const loadUser = ()=> async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST })

        const link = '/api/me'

        const { data } = await axios.get(link)
        console.log(data)

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
           
        })
        
    } catch (err) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: err.response.data.message
        })
    }
}


export const logout = ()=> async (dispatch) => {
    try {
        

    
        await axios.get('/api/logout')
        dispatch({ type: LOGOUT_SUCCESS })
      } 
      catch (err) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: err.response.data.message
        })
    }
}

export const clearError = ()=> async(dispatch)=>
{
    dispatch({type:CLEAR_ERRORS})
}

