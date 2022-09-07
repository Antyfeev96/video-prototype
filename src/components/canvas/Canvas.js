import React, {useEffect} from 'react';

function TimelineCanvas() {


    useEffect(() => {
        import("../../main").then(module => {
            console.log('IMPORTED')
        })
    }, [])

    return (
        <>
            <div id="controls" style={{
                opacity: 0,
                height: '1px'
            }}>
                <div className="demo-controls-wrapper">
                    <select id="streamSelect" className="innerControls">
                        <option defaultValue="">
                            Select a test-stream from drop-down menu. Or enter custom URL
                            below
                        </option>
                    </select>

                    <input id="streamURL" className="innerControls" type="text" defaultValue=""/>

                    <label
                        className="innerControls"
                        title="Uncheck this to disable loading of streams selected from the drop-down above."
                    >
                        Enable streaming:
                        <input id="enableStreaming" type="checkbox"/>
                    </label>

                    <label
                        className="innerControls"
                        title="When a media error occurs, attempt to recover playback by calling `hls.recoverMediaError()`."
                    >
                        Auto-recover media-errors:
                        <input id="autoRecoverError" type="checkbox"/>
                    </label>

                    <label
                        className="innerControls"
                        title="Stop loading and playback if playback under-buffer stalls. This can help debug stall errors."
                    >
                        Stop on first stall:
                        <input id="stopOnStall" type="checkbox"/>
                    </label>

                    <label className="innerControls">
                        Dump transmuxed fMP4 data:
                        <input id="dumpfMP4" type="checkbox"/>
                    </label>

                    <label className="innerControls">
                        Metrics history (max limit, -1 is unlimited):
                        <input id="limitMetrics" type="number"/>
                    </label>

                    <label className="innerControls">
                        HTML video element width:
                        <select id="videoSize">
                            <option value="240px">240px</option>
                            <option value="426px">426px</option>
                            <option value="640px">640px</option>
                            <option value="720px">720px</option>
                            <option value="854px">854px</option>
                            <option value="1280px">1280px</option>
                            <option value="1920px">1920px</option>
                            <option value="80%">Responsive (80%)</option>
                            <option value="100%">Responsive (100%)</option>
                        </select>
                    </label>

                    <label className="innerControls">
                        Current player size:
                        <span id="currentSize"></span>
                    </label>
                    <label className="innerControls">
                        Current video resolution:
                        <span id="currentResolution"></span>
                    </label>

                    <label className="innerControls permalink">
                        Permalink:&nbsp;&nbsp;<span id="StreamPermalink"></span>
                    </label>
                </div>

                <div className="config-editor-wrapper">
                    <div className="config-editor-container">
                        <div id="config-editor">Loading...</div>
                    </div>
                    <div className="config-editor-commands">
                        <label htmlFor="config-persistence">
                            Persist
                            <input
                                name="config-persistence"
                                id="config-persistence"
                                type="checkbox"
                            />
                        </label>
                        <button name="config-apply">
                            Apply
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="center demo-tab demo-timeline-chart-container"
                id="timelineTab"
            >
                <canvas
                    id="timeline-chart"
                />
            </div>
            <canvas
                id="bufferedCanvas"
                width="720"
                height="1"
                className="videoCentered"
            />
        </>
    );
}

export default TimelineCanvas;
