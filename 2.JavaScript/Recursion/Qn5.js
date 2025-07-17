//program to count number of times a specific character appears in a string.

//1.Recursive approach
function count(str,ch,ptr){
    let i=0;
    //Base Condition
    if(ptr === str.length){
        return 0;
    }
    
    if(str[ptr]===ch){
       i++;
    }
    // Recursive call
    i += count(str,ch,ptr+1);
    
    
    return i;
}
const str=prompt("Enter the string: ");
const ch=prompt("Enter the character you wanna count: ");
console.log(count(str,ch, 0));

//2.Iterative approach
function countSpecificChar(str,ch,ptr){
    let count=0;
    while(ptr<= str.length){
        if(str[ptr]== ch){
            count++;
        }
        ptr++;
    }
    return count;
}
// const str=prompt("Enter the string: ");
// const ch=prompt("Enter the character you wanna count: ");
// console.log(countSpecificChar(str,ch, 0));

