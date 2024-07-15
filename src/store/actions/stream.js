import { FETCH_STREAMS } from "./types"

export const fetchStreams = (streams) => {
    return {
        type: FETCH_STREAMS,
        payload: streams
    }
}