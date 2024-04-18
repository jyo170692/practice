import {createStore,combineReducers,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { categoryReducer } from './Reducer/CategoryReducer';
import { productReducer, productdetailReducer } from './Reducer/ProductReducer';
import { cartReducer } from './Reducer/CartReducer';
import { userRegistrationReducer } from './Reducer/RegisterReducer';
import { profileReducer } from './Reducer/ProfileReducer';


const reducer = combineReducers(
    {
       cat:categoryReducer,
       pro:productReducer,
       prodetail:productdetailReducer,
       cart:cartReducer,
       auth:userRegistrationReducer,
       pros:profileReducer
    }
)

const initialiseState = {
    cart:{
        cartItems:localStorage.getItem('cartItems')?
        JSON.parse(localStorage.getItem('cartItems')):[]
    }
}

const store = createStore(reducer,initialiseState,composeWithDevTools(applyMiddleware(thunk)))

export default store;