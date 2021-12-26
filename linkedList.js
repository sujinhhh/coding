class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    insertAtHead(data) {
        const newNode = new LiknedListNode(data, this.head)
        this.head = newNode
        this.length++
    }
}
class LiknedListNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}
module.exports = LinkedList