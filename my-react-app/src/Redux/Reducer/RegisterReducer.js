import
{
    REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILS,CLEAR_ERRORS
} from '../Constants/RegisterConstant'
import
{
    LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILS,LOAD_USER_REQUEST,LOAD_USER_SUCCESS,LOAD_USER_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL
} from '../Constants/LoginConstant.jsx'
import { PROFILE_UPDATE_FAILS, PROFILE_UPDATE_REQUEST, PROFILE_UPDATE_SUCCESS } from '../Constants/ProfileConstant.js'



export const   userRegistrationReducer =  (state={user:[]},action)=>
{
    switch(action.type)
    {
        case  REGISTER_USER_REQUEST :
        case  LOGIN_REQUEST: 
        case  LOAD_USER_REQUEST:
       
        return {loading:true , isAuthenticated:false}

        case REGISTER_USER_SUCCESS: 
        case LOGIN_SUCCESS:
        case LOAD_USER_SUCCESS:
       
        return {loading:false,isAuthenticated:true,user:action.payload}

        case REGISTER_USER_FAILS :
        case LOGIN_FAILS:
        case LOAD_USER_FAIL:
        
             return {loading:false,isAuthenticated:false,user:null,error:action.payload}
          
        case LOGOUT_SUCCESS:
            return{loading:false,user:null,isAuthenticated:false}

        case LOGOUT_FAIL:
            return{...state,loading:false,error:action.payload}
        case CLEAR_ERRORS : return {...state,error:null}
        default : return state

    }
}