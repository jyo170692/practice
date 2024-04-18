import axios from "axios";
import 
{ 
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_REQUEST,
    PROFILE_UPDATE_FAILS ,
    CLEAR_ERRORS,
    PASSWORD_CHANGE_REQUEST,
    PASSWORD_CHANGE_SUCCESS,
    PASSWORD_CHANGE_FAILS,
} from "../Constants/ProfileConstant";

export const  profileReducer =  (state={users:[]},action)=>
{
    switch(action.type)
    {
        case PROFILE_UPDATE_REQUEST:
        case PASSWORD_CHANGE_REQUEST:
        return {loading:true , isAuthenticated:false}

        case PROFILE_UPDATE_SUCCESS:
        case PASSWORD_CHANGE_SUCCESS:
        return {loading:false,isAuthenticated:true,users:action.payload}

        case PROFILE_UPDATE_FAILS:
        case PASSWORD_CHANGE_FAILS:
             return {loading:false,isAuthenticated:false,users:null,error:action.payload}
          
        
        case CLEAR_ERRORS : return {...state,error:null}
        default : return state

    }
}