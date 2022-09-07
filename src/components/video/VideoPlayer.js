import React, {useRef} from 'react';
import {useVideoPlayer} from "./useVideoPlayer";
import {formatSeconds} from "./utils";
import FragmentTimeline from "./FragmentTimeline";
import ProgressBar from "../canvas/ProgressBar";
import TimelineCanvas from '../canvas/Canvas';
import {TimelineChart} from "../../chart/timeline-chart.ts";

const rangeStyles = {
    width: '100%'
}

function VideoPlayer({ videoElement, fragments }) {
    const ref = useRef()

    const {
        progress,
        duration,
        handlers: {
            handleSeek,
            handleToggle
        }
    } = useVideoPlayer()

    const handleRangeSeek = ev => {
        let value = ev.target.value

        if (value <= 0) value = 0
        handleSeek(ev.target.value)
    }

    return (
        <div
            style={{
                width: '75%'
            }}
        >
            <video
                id='video'
                autoPlay
                controls
                style={{
                    width: '100%'
                }}
                ref={videoElement}
            />
            <span>{formatSeconds(progress)} / {formatSeconds(duration)}</span>
            <input
                type='range'
                max={duration}
                value={progress}
                step='any'
                onChange={handleRangeSeek}
                style={rangeStyles}
            />
            {/*<FragmentTimeline*/}
            {/*    fragments={fragments}*/}
            {/*/>*/}
            {/* <ProgressBar
                fragmentsObj={fragments}
            /> */}
            <TimelineCanvas />
            <button onClick={handleToggle}>
                Play/Pause
            </button>
            <button id="cut">
                cut
            </button>
        </div>
    );
}

export default VideoPlayer;
