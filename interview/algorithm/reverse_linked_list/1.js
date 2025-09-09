function reverseList(head){
    let prev = null
    let curr = head
    //当current 不为空时，循环
    while(curr){
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next

    }
    return prev
}