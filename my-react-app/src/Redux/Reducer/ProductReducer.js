
import
{
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    CLEAR_ERRORS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from '../Constants/ProductConstant';


export const   productReducer =  (state={products:[]},action)=>
{
    switch(action.type)
    {
        case ALL_PRODUCT_REQUEST: return {loading:true , products:[]}
        case ALL_PRODUCT_SUCCESS: return {laoding:false,products:action.payload.data}
        case ALL_PRODUCT_FAIL : return {loading:false,error:action.payload}
        case CLEAR_ERRORS : return {...state,error:null}
        default : return state

    }
}
export const productdetailReducer = (state={productdetail:[]},action)=>
{
    switch(action.type)
    {
        case PRODUCT_DETAILS_REQUEST: return {loading:true , productdetail:[]}
        case PRODUCT_DETAILS_SUCCESS: return {laoding:false,productdetail:action.payload.data}
        case PRODUCT_DETAILS_FAIL: return {loading:false,error:action.payload}
        case CLEAR_ERRORS : return {...state,error:null}
        default : return state
    }
}
