//用泛型去声明一个链表
//链表是数据结构，它有 ADT的概念，抽象数据类型
//这是一个支持泛型的，可以接受value类型的传参
class NodeItem<T> {
    value: T
    next: NodeItem<T> | null = null //联合类型
    constructor(value: T) {
        this.value = value
    }
}

class LinkedList<T> {
    head: NodeItem<T> | null = null

    append(value: T): void {
        const newNodeItem = new NodeItem(value)
        if (!this.head) {
            this.head = newNodeItem
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNodeItem
    }
}

const  numberList = new LinkedList<number>()

numberList.append(114514)
numberList.append(1919810)
numberList.append(114514)

interface User{
    id:number
    name:string
}

const userList = new LinkedList<User>()

userList.append({id:1,name:'张三'})
userList.append({id:2,name:'李四'})
userList.append({id:3,name:'王五'})
