import { useEffect, useRef } from 'react'

function useInterval(callback, delay) {
    //useRef 可以改变对象
    const savedCallback = useRef()

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    //添加定时器
    useEffect(() => {
        if (delay === null) return
        const tick = () => savedCallback.current()
        const id = setInterval(tick, delay)
        return () => clearInterval(id)
    }, [delay])
}

export default useInterval