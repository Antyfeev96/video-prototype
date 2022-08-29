import React, {useEffect, useState} from 'react';
import Hls from "hls.js";
import {VideoProvider} from './useVideoPlayer';
import {useHls} from "./useHls";
import VideoPlayer from "./VideoPlayer";

function Video() {

    const [fragments, setFragments] = useState({})

    const videoElement = useHls({
        listeners: (context, url) => {
            context.on(Hls.Events.MEDIA_ATTACHED, () => {
                context.loadSource(url)

                context.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
                    // setManifest(data)
                })

                context.on(Hls.Events.LEVEL_LOADED, async (event, data) => {
                    const fragmentsMap = {}
                    const fragmentsArray = Array.from(data.details.fragments)
                    fragmentsArray.forEach((frag, i) => {
                        fragmentsMap[i] = {...frag, index: i, loaded: false}
                    })
                    setFragments(fragmentsMap)
                })

                context.on(Hls.Events.FRAG_LOADED, (event, data) => {
                    const index = data.frag.sn - 1
                    setFragments(state => ({
                        ...state,
                        [index]: {...data.frag, index, loaded: true},
                    }))
                })
            })
        },
    })

    return (
        <VideoProvider videoElement={videoElement}>
            <VideoPlayer
                videoElement={videoElement}
                fragments={fragments}
            />
        </VideoProvider>
    );
}

export default Video;
