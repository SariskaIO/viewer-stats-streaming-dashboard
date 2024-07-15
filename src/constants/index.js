
export const GENERATE_TOKEN_URL = `${process.env.REACT_APP_API_SERVICE_HOST}/api/v1/misc/generate-token`;
export const VIEWER_STATS_URL = `${process.env.REACT_APP_API_SERVICE_HOST}/terraform/v1/hooks/viewers/stats`;
export const HLS_VIEWER_COUNT_URL = `${process.env.REACT_APP_API_SERVICE_HOST}/terraform/v1/hooks/srs/live/viewers/count`
export const LL_HLS_VIEWER_COUNT_URL = `${process.env.REACT_APP_API_SERVICE_HOST}/llhls/v1/hooks/srs/live/viewers/count`

export const LOW_LATENCY_FLAG = 'is_low_latency';

export const STREAMING_FLAGS = [
    'audio_only',
    'video_only',
    'is_vod',
    'is_recording',
    'is_low_latency',
    'multi_bitrate',
    'codec',
    'stream_keys'
]