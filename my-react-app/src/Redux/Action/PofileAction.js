import axios from "axios";
import 
{ 
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_REQUEST,
    PROFILE_UPDATE_FAILS,
    CLEAR_ERRORS,
    PASSWORD_CHANGE_REQUEST,
    PASSWORD_CHANGE_SUCCESS,
    PASSWORD_CHANGE_FAILS,
} from "../Constants/ProfileConstant";


export const profileChange = (myForm)=> async(dispatch)=>
{
    try
    {
        // console.log("hello")
          dispatch({type:PROFILE_UPDATE_REQUEST})
          const link = '/api/updateprofile'
         console.log(link)
          const { data } = await axios.post(link,myForm)
          console.log(data)
          dispatch({type:PROFILE_UPDATE_SUCCESS,  payload : data.data})
        

    }
    catch(error)
    {
        dispatch({type:PROFILE_UPDATE_FAILS,  payload : error.response.data.message})
      
    }
}

export const passwordChange = (myForm)=> async(dispatch)=>
{
    try
    {
        // console.log("hello")
          dispatch({type:PASSWORD_CHANGE_REQUEST})
          const link = '/api/changepassword'
         console.log(link)
          const { data } = await axios.post(link,myForm)
          console.log(data)
          dispatch({type:PASSWORD_CHANGE_SUCCESS,  payload : data})
        

    }
    catch(error)
    {
        dispatch({type:PASSWORD_CHANGE_FAILS,  payload : error.response.data.message})
      
    }
}
export const clearError = ()=> async(dispatch)=>
{
    dispatch({type:CLEAR_ERRORS})
}
