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
// // };

class LinkedList {
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
    console.log(array);
  }

  insert(index, value) {
    // Check if index is out of bounds
    if (index < 0 || index > this.length) {
      console.log("Invalid index");
      return this;
    }

    // If index is 0, it's similar to prepending
    if (index === 0) {
      return this.prepend(value);
    }

    // If index is equal to the length, it's similar to appending
    if (index === this.length) {
      return this.append(value);
    }

    // Otherwise, insert at the specified index
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

  // Helper function to traverse to the specified index
  traverseToIndex(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

const myLinkedlist = new LinkedList(10);
myLinkedlist.append(5);
myLinkedlist.prepend(1);
myLinkedlist.insert(1, 8); // Inserting 8 at index 1
// Output: [1, 8, 10, 5]
myLinkedlist.insert(3, 55);
myLinkedlist.remove(3);
myLinkedlist.remove(3);
myLinkedlist.printList();
