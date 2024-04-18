 import
{
  ALL_CATEGORY_REQUEST, ALL_CATEGORY_SUCCESS, ALL_CATEGORY_FAIL
} from '../Constants/CategoryConstant';
import axios from 'axios';

export const getcategories = ()=> async (dispatch) => {
  try {
      dispatch({ type: ALL_CATEGORY_REQUEST });

      let link = "/api/categorydisplay";
     
      const { data } = await axios.get(link);  // Use 'data' to extract the response data
      
      // console.log({ data });

      dispatch({
          type: ALL_CATEGORY_SUCCESS,
          payload: data
      });
  } catch (error) {
      dispatch({
          type: ALL_CATEGORY_FAIL,
          payload: error.response.data.message  // Use 'data' to access the error message
      });
  }
};
