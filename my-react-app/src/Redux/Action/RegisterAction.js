import
{
    REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILS,CLEAR_ERRORS
} from '../Constants/RegisterConstant'
import axios from 'axios';

export const register = (myForm)=> async (dispatch) => {
  try {
      dispatch({ type:  REGISTER_USER_REQUEST});

      let link = "/api/resinsert";
     
      const { data } = await axios.post(link,myForm);  // Use 'data' to extract the response data
      
    //   console.log({ data });

      dispatch({
          type: REGISTER_USER_SUCCESS,
          payload: data
      });
  } catch (error) {
      dispatch({
          type: REGISTER_USER_FAILS,
          payload: error.response.data.message  // Use 'data' to access the error message
      });
  }
};
export const clearError = ()=> async(dispatch)=>
{
    dispatch({type:CLEAR_ERRORS})
}