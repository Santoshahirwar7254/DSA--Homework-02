// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Time complexity o(n)

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

    let prev = null;
    let curr = head;

    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    let result = [];
    while (prev !== null) {
        result.push(prev.val);
        prev = prev.next;
    }

    return result;
}


let rev = List([1,2,3,4,5]);
console.log(rev);
