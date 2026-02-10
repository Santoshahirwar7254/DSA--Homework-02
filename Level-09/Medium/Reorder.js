// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 
// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

// Time complexity:  o(n)

function List(arr) {
    function Node(val) {
        this.val = val;
        this.next = null;
    }

    let head = new Node(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new Node(arr[i]);
        curr = curr.next;
    }

    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let temp = slow.next;
    slow.next = null;

    while (temp) {
        let next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
    }

    let first = head;
    let second = prev;

    while (second) {
        let t1 = first.next;
        let t2 = second.next;

        first.next = second;
        second.next = t1;

        first = t1;
        second = t2;
    }

    let result = [];
    let node = head;

    while (node) {
        result.push(node.val);
        node = node.next;
    }

    return result;
}

let answer = List([1,2,3,4]);
console.log(answer);