/*
EXERCISE 28:

        Write a function called "sameIngredients" that takes two parameters called "str1" and "str2" and returns true/false whether str1 is composed only of characters found in str2 (case-insensitive).

        For example:

        sameIngredients("bob","jane") should return false
        sameIngredients("Bob","bobby") should return true
        sameIngredients("indy books for sale.","KIND Boars left you alone.") should return true
*/

function sameIngredients(str1,str2){
    var answer = true;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    str1 = str1.split('');
    str2 = str2.split('');
    for (var i = 0; i < str1.length; i++)
    {
        if(str2.includes(str1[i])){
            answer = true;
        }else{
            answer = false;
        }
    }
    return answer;
}

