import { createStore, combineReducers } from "redux";
import SetInputReducer from "./Reducers/SetInputReducer";
import SetMovieListReducer from "./Reducers/SetMovieListReducer";
import StarReducer from "./Reducers/StarReducer";
import ShowReducer from "./Reducers/ShowReducer";
import SetTitreReducer from "./Reducers/SetTitreReducer";
import SetLinkReducer from "./Reducers/SetLinkReducer";
import SetRateReducer from "./Reducers/SetRateReducer";
import SetDescReducer from "./Reducers/SetDescReducer";
const Store=createStore(combineReducers({
    InputValue:SetInputReducer,
    MovieTab:SetMovieListReducer,
    StarTab:StarReducer,
    Show:ShowReducer,
    titre:SetTitreReducer,
    link:SetLinkReducer,
    rate:SetRateReducer,
    description:SetDescReducer,
}))
export default Store;