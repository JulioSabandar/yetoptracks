import { createStore, combineReducers } from 'redux';
import playlistReducer from "./reducers/playlist";
const reducer = combineReducers({
    playlistReducer
});
const store = createStore(reducer);
export default store;
