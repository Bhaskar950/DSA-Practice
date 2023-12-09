//HASHTABLE IMPLEMENTATION

// Node Class:
// The Node class is a simple representation of a node in the
//linked list used for separate chaining. Each node has
//a key, a value, and a reference to the next node.
//
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

// Constructor:
// The HashTable class is initialized with a default size of 10,
//but you can provide a different size if needed.
// this.size represents the number of buckets in the hash table,
// and this.buckets is an array to store linked lists (buckets).

class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  //   Hash Function:
  // The hash function takes a key as input and returns an
  // index within the range of the number of buckets (this.size).
  // It uses the ASCII values of characters in the key to calculate the hash.

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  //   Set Method:
  // The set method is used to add a key-value pair to the hash table.
  //It calculates the hash index, checks if the key already exists in
  //the bucket, and either updates the existing value or adds a new node to the linked list.

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Check if the key already exists in the bucket
    for (const node of bucket) {
      if (node.key === key) {
        // Update the value if the key already exists
        node.value = value;
        return;
      }
    }

    // If key doesn't exist, add a new node to the bucket
    const newNode = new Node(key, value);
    bucket.push(newNode);
  }

  //   Get Method:
  // The get method retrieves the value associated with a given key.
  // It calculates the hash index, searches for the key in the corresponding bucket,
  // and returns the value if the key is found.

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Search for the key in the bucket
    for (const node of bucket) {
      if (node.key === key) {
        // Return the value if the key is found
        return node.value;
      }
    }

    // Return null if the key is not found
    return null;
  }

  //   Remove Method:
  // The remove method removes a key-value pair from the hash table.
  //It calculates the hash index, searches for the key in the corresponding bucket,
  //and removes the node if found.

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Search for the key in the bucket and remove the node
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }
}

// Example usage:

// Example Usage:
// The example usage section demonstrates creating a HashTable,
// setting key-value pairs, getting values by key, and removing a key-value pair.

const myHashTable = new HashTable();

myHashTable.set("name", "John");
myHashTable.set("age", 25);
myHashTable.set("city", "New York");

console.log(myHashTable.get("name")); // Output: John
console.log(myHashTable.get("age")); // Output: 25
console.log(myHashTable.get("city")); // Output: New York

myHashTable.remove("age");
console.log(myHashTable.get("")); // Output: null (key 'age' is removed)
