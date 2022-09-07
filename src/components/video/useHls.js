import { useRef, useEffect } from "react";
import Hls from "hls.js";

export const useHls = (options = {}) => {
    const videoElement = useRef(null)
    // const mediaURL = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

    // useEffect(() => {
    //     if (!Hls.isSupported()) return console.error('HLS not supported')
    //     const video = videoElement.current
    //     function init() {
    //         const hls = new Hls()
    //         hls.attachMedia(video)
    //         options.listeners(hls, mediaURL)
    //     }
    //
    //     init()
    //
    //     return () => {}
    // }, [])

    return videoElement
}
