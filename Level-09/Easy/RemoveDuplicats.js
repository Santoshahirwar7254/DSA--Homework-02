// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]

function List(head) {

    if (Array.isArray(head)) {
        let dummy = { next: null };
        let curr = dummy;

        for (let val of head) {
            curr.next = { val: val, next: null };
            curr = curr.next;
        }
        head = dummy.next;
    }

    let curr = head;

    while (curr !== null && curr.next !== null) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next; 
        } else {
            curr = curr.next;
        }
    }

    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }

    return result;
}

let duplicate = List([1,1,2]);
console.log(duplicate);
