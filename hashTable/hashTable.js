class HashTable {
  constructor(size = 53) {
    this.table = new Array(size)
    this.size = size
  }

  // Hash function to generate array index
  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.size
    }
    return hash
  }

  // Insert a key-value pair
  set(key, value) {
    const index = this._hash(key)

    // Initialize a linked list (array) at the index if it's empty
    if (!this.table[index]) {
      this.table[index] = []
    }

    // Store the key-value pair as an array
    this.table[index].push([key, value])
  }

  // Retrieve a value by key
  get(key) {
    const index = this._hash(key)
    const currentBucket = this.table[index]

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }

  // Remove a key-value pair
  remove(key) {
    const index = this._hash(key)
    const currentBucket = this.table[index]

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          currentBucket.splice(i, 1)
          return true
        }
      }
    }
    return false
  }
}
