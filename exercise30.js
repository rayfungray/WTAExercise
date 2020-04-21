/*
EXERCISE 30:

        Write a function called "isEuroFormat" that takes a parameter called "serial" and returns whether it is a correctly-formatted euro banknote serial number.

        Valid serial numbers are comprised of 12 characters: one capital letter followed by 11 digits

        For example:

        isEuroFormat("X04135981862") should return true
        isEuroFormat("x04135981862") should return false //letter not capitalized
        isEuroFormat("504135981862") should return false //doesn't start with letter
        isEuroFormat("X041359818626") should return false //too many numbers
        isEuroFormat("X0413598186") should return false //not enough numbers
        isEuroFormat("XX4135981862") should return false //too many letters        
*/

function isEuroFormat(input){
    return checkTheFirstLetter(input) && checkNumbers(input) && checkNumLength(input);
}



function checkTheFirstLetter(input){
    var character = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    return character.includes(input[0]);
}

function checkNumbers(num){
    var nums ='0123456789';
    var reminingNum = num.slice(1);
    for(var i = 0; i < reminingNum.length; i++){
        if(!nums.includes(reminingNum[i]))
        {
            return false;
        }
     }
     return true;
}

function checkNumLength(input){
    var reminingNum = input.slice(1);
    return reminingNum.length === 11;
}
