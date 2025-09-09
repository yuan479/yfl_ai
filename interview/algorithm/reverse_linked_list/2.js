function reverseListRecursive(head){
    if(!head || !head.next){
        return head
    }
    
    const headNext = reverseListRecursive(head.next)
    head.next.next = head
    head.next = null
    return headNext
}

const newHead = reverseListRecursive(head.next)
head.next.next = head
head.next = null
return newHead
