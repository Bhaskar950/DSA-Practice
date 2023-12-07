class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class hashTable {
  constructor(size = 10) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (const node of bucket) {
      if (node.key === key) {
        node.value = value;
        return;
      }
    }
    const newNode = new Node(key, value);
    bucket.push(newNode);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (const node of bucket) {
      if (node.key === key) {
        return node.value;
      }
    }
    return null;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }
}

const myhashTable = new hashTable();

myhashTable.set("name", "Bhaskar");
console.log(myhashTable.get("name"));
