import { FETCH_STREAMS } from "store/actions/types";

const initialState = {};

export const stream = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            state = {...action.payload};
            return {...state};
        default:
            return state;
    }
};
