/**
 * Class representing a node in a linked list.
 */
class Node {
  /**
   * Create a node.
   * @param {any} data - The data to store in the node.
   */
  constructor(data) {
    this.data = data // Store the node's data
    this.next = null // Pointer to the next node, initially null
  }
}

/**
 * Class representing a singly linked list.
 */
class linkedList {
  /**
   * Create an empty linked list.
   */
  constructor() {
    this.head = null // Initialize the head of the list as null (empty list)
  }

  /**
   * Insert a new node at the end of the linked list.
   * @param {any} data - The data to store in the new node.
   */
  append(data) {
    let newNode = new Node(data) // Create a new node with the given data

    // Check if the list is empty; if so, set the new node as the head
    if (!this.head) {
      this.head = newNode
    } else {
      // Traverse to the last node
      let current = this.head
      while (current.next != null) {
        current = current.next
      }
      // Link the last node to the new node
      current.next = newNode
    }
  }

  /**
   * Insert a new node at the beginning of the linked list.
   * @param {any} data - The data to store in the new node.
   */
  prepend(data) {
    let newNode = new Node(data) // Create a new node with the given data
    newNode.next = this.head // Link the new node to the current head
    this.head = newNode // Set the new node as the new head
  }

  /**
   * Delete the first node that contains the given data.
   * @param {any} data - The data to be deleted from the list.
   */
  delete(data) {
    // Check if the list is empty
    if (!this.head) return // List is empty, nothing to delete

    // Check if the data to be deleted is at the head (first node)
    if (this.head.data === data) {
      this.head = this.head.next // Move the head to the next node, effectively deleting the current head
      return // Exit after deletion
    }

    // Initialize a pointer to traverse the list, starting from the head
    let current = this.head

    // Traverse the list until we reach the end (null) or find the node to delete
    while (current.next !== null) {
      // Check if the next node contains the data to be deleted
      if (current.next.data === data) {
        // Remove the next node by bypassing it and linking the current node to the next-next node
        current.next = current.next.next
        return // Exit after deletion
      }

      // Move to the next node in the list
      current = current.next
    }
  }

  /**
   * Search for the first occurrence of a node with the given data.
   * @param {any} data - The data to search for.
   * @returns {boolean} - Returns true if the data is found, otherwise false.
   */
  search(data) {
    // Initialize a pointer to start from the head of the list
    let current = this.head

    // Traverse the list until the end (null) is reached
    while (current !== null) {
      // Check if the current node's data matches the search data
      if (current.data === data) {
        return true // Data found, return true
      }

      // Move to the next node in the list
      current = current.next
    }

    // If we reach the end of the list without finding the data, return false
    return false
  }

  /**
   * Print the elements of the linked list in order.
   */
  print() {
    let current = this.head // Start at the head of the list
    let elements = [] // Array to store the list elements

    // Traverse the list and collect the data from each node
    while (current !== null) {
      elements.push(current.data) // Add the data to the elements array
      current = current.next // Move to the next node
    }

    // Print the elements of the linked list as a string with arrows
    console.log(elements.join(" -> "))
  }
}

const list = new linkedList()
list.append(10)
list.append(20)
list.append(30)
list.prepend(5)
list.print()
list.delete(20)
list.print()
console.log(list.search(10))
console.log(list.search(50))
