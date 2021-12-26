const LinkList = require('./linkedList.js')

describe('#insertAtHead', () => {
    test('it adds the elment to the begining of the list', () => {
        const ll = new LinkList()
        ll.insertAtHead(10)
        const oldHead = ll.head
        ll.insertAtHead(20)
        expect(ll.head.value).toBe(20)
    })
}) 