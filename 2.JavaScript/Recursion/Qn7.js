// program to check whether a given string is palindrome or not.

//1. Recursive approach

function isPalindrome(str,i,j){
    flag= false;
    //Base condition
   if(i>=j){
      flag=true;
      return flag; 
   }
   if(str[i]=== str[j]){
       
      isPalindrome(str,i+1,j-1);

   }
   else{
      flag=false;
      return flag;
   }
}
let str=prompt("Enter the string: ");
let i=0;
let j = str.length-1;
console.log(checkPalindrome(str,i,j));


//2.Iterative approach
function checkPalindrome(str,i,j){
   flag = false;
   while(i<j){
      if(str[i]=== str[j]){
         i++;
         j--;
      }
      else{
         flag= false;
         return flag;
      }
   }
   flag= true;
   return flag;
}
// let str="121";
// let i=0;
// let j = str.length-1;
// console.log(checkPalindrome(str,i,j));