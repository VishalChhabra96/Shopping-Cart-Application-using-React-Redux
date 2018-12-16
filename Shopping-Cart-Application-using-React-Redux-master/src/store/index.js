import {createStore, combineReducers} from "redux";
import productReducer from "../reducer/productReducer";
import cartReducer from "../reducer/cartReducer";

const reducer = combineReducers({products: productReducer, cart: cartReducer});
const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__());
export default store;