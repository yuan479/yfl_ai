class EventEmitter {
    constructor() {
        //维护一个callbacks 订阅者
        this.events = {}//type,[] 
    }
    on(event, listener) {//订阅
        if (!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(listener)
    }
    //手动触发
    emitter(event, ...args) {
        if (!this.events[event]) return
        this.events[event].forEach(listener => {
            listener.apply(this, args)
        })
    }
    off(event, listener) {//移除订阅
        //removeEventListener type + callback 具体的订阅者
        if (!this.events[event]) return
        this.events[event] = this.events[event].filter(l => l !== listener)
    }
    once() {

    }
}

const ws = new EventEmitter()
ws.on('成功', () => {
    console.log('开心的土豆')
})
ws.on('失败', () => {
    console.log('哭泣的土豆')
})
ws.emitter('失败')

setTimeout(() => {
    ws.emitter('成功')
}, 5000)
