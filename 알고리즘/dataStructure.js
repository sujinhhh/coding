//  효율적인 순서 O(1) > O(log n) > O(n) > O(nlong n) > O(n2)

// O(1) :
// 1. Array의 경우 - pop, push 처럼 뒤에서 넣고 빼는 것
function addItems(n) {
  return n + n;
}

// O(n) : for loop 이 두번 들어간 경우에 O(2n) 이지만 그냥 O(n) 이라고 표기
function longItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// O(log n) // 반 나누어서 찾는 방식
// log2of8 = 3
console.log(Math.log2(1073741824));

// O(n)
// shift, unshift 처럼 앞에서 뺏다 끼면

// O(n2) // for loop 안에 또 loop 이 들어가는 경우

// Linked Lists

// class LinkedList {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.head = newNode;
//     this.tail = this.head;
//     this.lenght = 1;
//   }
// }
// // 모든 메소드가 create node 를 하기 때문에 새로운 클라스를 따로 만들어야 중복을 하지 않음
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// 이거를 넣으라는 말임
// {
//   value:4
//   next:null
// }
// push
//   push(value) {
//     const newNode = new Node(value);
//     if (!this.head) { //if linked list is empty
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      //if linked list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}
let myLinkedList = new LinkedList(7);
myLinkedList.push(4);
console.log(myLinkedList);
