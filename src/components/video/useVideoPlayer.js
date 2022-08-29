import React, { useContext, useEffect, useState } from 'react'

export const VideoContext = React.createContext({
    progress: 0,
    duration: 0,
    isPlaying: false,
    handlers: {},
})

export const VideoProvider = ({ videoElement, children }) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        if (!videoElement.current) return;

        videoElement.current.addEventListener('canplay', ev => {
            setDuration(+ev.target.duration)
            ev.target.play()
        })

        videoElement.current.addEventListener('timeupdate', ev => {
            setProgress(ev.target.currentTime)
        })

        videoElement.current.addEventListener('click', ev => {
            isPlaying ? ev.target.pause() : ev.target.play()
        })
    }, [videoElement])

    const handlePause = () => {
        videoElement.current.pause()
        setIsPlaying(false)
    }
    const handlePlay = () => {
        videoElement.current.play()
        setIsPlaying(true)
    }

    const handleToggle = () => {
        isPlaying ? handlePause() : handlePlay()
    }

    const handleSeekPercent = percent => {
        videoElement.current.currentTime *= percent
        setProgress(state => state * percent)
    }
    const handleSeek = to => {
        videoElement.current.currentTime = to
        setProgress(state => to !== state && to > 0 && to)
    }

    const setPlaybackRate = to => {
        videoElement.current.playbackRate = to
    }

    const handleSkip = howMuch => {
        videoElement.current.currentTime += howMuch
        setProgress(videoElement.current.currentTime)
    }

    return (
        <VideoContext.Provider
            value={{
                progress,
                duration,
                isPlaying,
                handlers: {
                    setPlaybackRate,
                    handleSkip,
                    handleSeek,
                    handleToggle,
                    handlePause,
                    handleSeekPercent,
                    handlePlay,
                },
            }}
        >
            {children}
        </VideoContext.Provider>
    )
}

export const useVideoPlayer = () => {
    return useContext(VideoContext)
}
