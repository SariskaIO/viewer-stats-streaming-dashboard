import { LOW_LATENCY_FLAG } from "constants";
import { HLS_VIEWER_COUNT_URL } from "constants";
import { LL_HLS_VIEWER_COUNT_URL } from "constants";
import { GENERATE_TOKEN_URL } from "constants";

export async function getToken() {
    if(!process.env.REACT_APP_API_KEY){
        return console.log('Kindly provide a valid api key in environment file')
    }
    const body = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            apiKey: process.env.REACT_APP_API_KEY,
            // user: {
            //     id: profile.id,
            //     avatar: avatarColor,
            //     name: name,
            //     email: profile.email,
            //     moderator: profile.isModerator
            // },
            exp: "48 hours"
        })
    };
    
    try {
        const response = await fetch(GENERATE_TOKEN_URL, body);
        if (response.ok) {
            const json = await response.json();
            localStorage.setItem("SARISKA_VIEWER_STATS_TOKEN", json.token);
            return json.token;
        } else {
            console.log(response.status);
        }
    } catch (error) {
        console.log('error', error);
    }
}

export const flagsPassedInStreaming = (stream) => {
    if(!Object.keys(stream)?.length) return null;
    const {user_id, ...rest} = stream
    return rest;
}

export const getViewerCount = async(flags, streamId) => {
    if(!Object.keys(flags)?.length && !streamId) return;
    
    const VIEWER_COUNT_URL = LOW_LATENCY_FLAG in flags ?  LL_HLS_VIEWER_COUNT_URL : HLS_VIEWER_COUNT_URL;
    
    try {
        const response = await fetch(`${VIEWER_COUNT_URL}/${streamId}`);
        
        if (response.ok) {
            return await response.json();
        } else {
            console.log(response.status);
        }
    } catch (error) {
        console.log('error', error);
    }
}

export const getFirstStreamId = (streamKeys) => {
    if(!streamKeys?.length) return null;
    let streamObj = streamKeys[0];
    return streamObj.split('/')[1];
}