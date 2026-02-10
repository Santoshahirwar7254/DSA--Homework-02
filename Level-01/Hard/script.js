// Pattern 1: Half-Diamond Pattern Using Numbers
// Example Input & Output
// Input:
// 3 4

// Output:

// 3  
// 44  
// 555  
// 6666  
// 555  
// 44  
// 3  

// Time complexity: o(n);
 
function Pattern(n) {
    let row = 4;
    let totalRows = 2 * row - 1;

    for (let i = 1; i <= totalRows; i++) {
        let count;

        if (i <= row) {
            count = i;
        } else {
            count = (2 * row) - i;
        }

        let value = n + count - 1;
        console.log(value.toString().repeat(count));
    }
    
}


Pattern(5);
