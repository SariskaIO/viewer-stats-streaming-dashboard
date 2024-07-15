import { FETCH_VIEWER_COUNTS, GET_VIEWER_STREAM_ID } from "./types"

export const fetchViewerCounts = (counts) => {
    return {
        type: FETCH_VIEWER_COUNTS,
        payload: counts
    }
}

export const getViewerStreamId = (id) => {
    return {
        type: GET_VIEWER_STREAM_ID,
        payload: id
    }
}