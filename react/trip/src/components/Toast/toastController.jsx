
// 让组件基于事件机制来通信
// 事件总线
import mitt from 'mitt' //mitt 

//实例化
export const toastEvents = mitt()


export function showToast(user = 0, bell = 0, mail = 0) {
    //任何想要于Toast通信的地方调用
    //emit 发布事件 ，发布者模式
    toastEvents.emit('show', bell, mail)
}