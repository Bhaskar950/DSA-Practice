// linkedlist implementation

// let myLinkedlist = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     (this.tail.next = newNode), (this.tail = newNode), this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
// }

// const myLinkedlist = new LinkedList(10);
// myLinkedlist.append(5);
// myLinkedlist.prepend(1);
// console.log(myLinkedlist);

// //practice 2

// class myLin {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   apeend(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//   }
// }

//practice 3

class m {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.log("invalid index");
      return this;
    }
    if (index === 0) {
      return this.prepend(value);
    }
    if (index === this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    let leader = this.traverseToIndex(index - 1);
    newNode.next = leader.next;
    leader.next = newNode;
    this.length++;
    return this;
  }
  traverseToIndex(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

const val = new m(20);
val.append(30);
val.prepend(10);
val.insert(1, 555);
console.log(val.printList());

// console.log(val);
