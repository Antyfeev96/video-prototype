import { Duration } from 'luxon'

export const formatSeconds = time => {
    if (!time) return '00:00:00'
    return Duration.fromMillis(time * 1000).toFormat('hh:mm:ss')
}
