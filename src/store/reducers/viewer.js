import { GET_VIEWER_STREAM_ID } from "store/actions/types";
import { FETCH_VIEWER_COUNTS } from "store/actions/types";
import { FETCH_STREAMS } from "store/actions/types";

const initialState = {
    viewersCount: 0,
    viewersStreamId: null
};

export const viewer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VIEWER_COUNTS:
            state.viewersCount = action.payload;
            return {...state};
        case GET_VIEWER_STREAM_ID:
            state.viewersStreamId = action.payload;
            return {...state};
        default:
            return state;
    }
};
