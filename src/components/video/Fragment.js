import React, {useRef} from 'react'
import {formatSeconds} from './utils'

export const Fragment = ({
                             index,
                             start,
                             style,
                             key,
                             // onClick,
                             ...props
                         }) => {
    const fragmentRef = useRef(null)
    const time = formatSeconds(props.start)

    console.log({props})

    return (
        <div
            style={style}
            key={key}
            ref={fragmentRef}
            data-index={index}
            // onClick={onClick}
        >
            <div>{time}</div>
        </div>
    )
}

