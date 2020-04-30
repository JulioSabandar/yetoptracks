import { createStore, combineReducers, applyMiddleware } from 'redux';
import playlistReducer from "./reducers/playlist";
import tracklistReducer from "./reducers/tracklist";

import thunk from "redux-thunk";

const reducer = combineReducers({
    playlistReducer,
    tracklistReducer
});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
