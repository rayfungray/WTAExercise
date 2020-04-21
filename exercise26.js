/*
EXERCISE 26:

        Write a function called "isPalindrome" that takes a parameter called "str" and returns whether "str" is a palindrome without respect to punctuation, spaces, or capitalization.
        
        For example:

        isPalindrome("Tacocat .") should return true
        isPalindrome("Niagara") should return false
        isPalindrome("T ac' ocat.   ") should return true
*/

function isPalindrome(str){
    var newStr='';
    str = str.toLowerCase();
    str = str.split(' ').join('');
    var character = 'qwertyuiopasdfghjklzxcvbnm';
    for(var i = 0; i < str.length; i++){
        if(character.includes(str[i])){
            newStr = newStr + str[i];
        }
    }

    return newStr === newStr.split('').reverse().join('');
}
