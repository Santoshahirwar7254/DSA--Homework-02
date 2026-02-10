// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]

// Time complexity o(n log n);

function List(lists) {

    let heap = [];

    function push(node) {
        heap.push(node);
        heap.sort((a, b) => a.val - b.val);
    }

    function pop() {
        return heap.shift();
    }

    for (let arr of lists) {
        if (arr.length === 0) continue;

        let dummy = { next: null };
        let curr = dummy;

        for (let val of arr) {
            curr.next = { val: val, next: null };
            curr = curr.next;
        }
        push(dummy.next); 
    }

    let dummyRes = { next: null };
    let tail = dummyRes;

    while (heap.length > 0) {
        let node = pop();
        tail.next = node;
        tail = tail.next;

        if (node.next !== null) {
            push(node.next);
        }
    }

    let result = [];
    let temp = dummyRes.next;

    while (temp !== null) {
        result.push(temp.val);
        temp = temp.next;
    }

    return result;
}

let merge = List([[1,2,3],[4,5,6],[7,8,9]]);
console.log(merge);
