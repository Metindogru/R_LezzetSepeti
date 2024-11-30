import { createStore, combineReducers, applyMiddleware } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import cartReducer from "./reducers/CartReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  restaurantReducer,
  cartReducer,
});

//* ApplyleMiddleware herhangi bir ara yazılımı redux'a dahil etmeye yarar.
//*Burada "thunk" dahil etmek için kullanıldı
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
