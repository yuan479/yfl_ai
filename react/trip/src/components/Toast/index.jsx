import styles from 'toast.module.css'
import {toastEvents} from './toastController'
import { useState,useEffect } from 'react'

const Toast = () => {
    const [visible, setIsVisible] = useState(false)
    const [data, setData] = useState({
        user: 0,
        bell: 0,
        mail: 0
    })
    //等着通信到来
    useEffect(()=>{
        const show =(info)=>{
            setData(info)
            setIsVisiable(true)
        }
        // toastEvents 是mitt 的实例
        //自定义事件 show 是事件的名字
        // on 监听一个事件
        //订阅了一个show事件
        toastEvents.on('show',show)
    },[])
    if(!visible) return rull
    return (
        <div className={styles.toastWrapper}>

            <div className={styles.toastItem}>👤 {data.user}</div>
            <div className={styles.toastItem}>🔔 {data.bell}</div>
            <div className={styles.toastItem}>✉ {data.mail}</div>
            <div className={styles.toastArrow}></div>

        </div>
    )
}

export default Toast