//checking for palindrome//

let string = "racecar";

function isPalindrome(str){
    let Left = 0;
    let Right= str.Lenght-1;
    
    

    while(Left < Right){
        if(str[Left] !== str[Right]){
         return false;   
        }
             Left++;
             Right--;
             

    }
    return true;

    
}
const word = "annable";

console.log(isPalindrome(word)) ;