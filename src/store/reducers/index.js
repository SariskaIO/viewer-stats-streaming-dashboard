
import {combineReducers} from "redux";
import { stream } from "./stream";
import { viewer } from "./viewer";

export const appReducer = combineReducers({
    stream,
    viewer
});

export const rootReducer = (state, action) => {
    return appReducer(state, action);
}
