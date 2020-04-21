/*
EXERCISE 32:

        Write a function called "isValidCardFormat" that takes a parameter called "number" and returns whether it is a correctly-formatted credit card number.

        Valid credit card numbers have a prefix (the first numbers) that matches a particular type of card.
        Valid credit card numbers will also have a length that matches the type of card.
                         __________________________________
                         |       Prefix        |  Length  |
                         ----------------------------------
                    Visa |          4          | 13 or 16 |
        American Express |       34 or 37      |    15    |
              MasterCard |        51-55        |    16    |
                Discover |        6011         |    16    |
            Diner's Club | 300-305 or 36 or 38 |    14    |
                         ----------------------------------

        For example:

        isValidCardFormat("4175937769982") should return true //visa with length of 13
        isValidCardFormat("4175937769982456") should return true //visa with length of 16
        isValidCardFormat("3035937769982456") should return false //Diner's Club with a length of 16
        isValidCardFormat("5635937769982456") should return false //Invalid prefix with a length of 16    
*/

function isValidCardFormat(number){
   return getCardType(number) && checkNumbers(number);
}

function getCardType(num){
    var firstLetter = num.slice(0,1);
    var firstTwoLetter = num.slice(0,2);
    var firstThreeLetter = num.slice(0,3);
    var firstFourLetter = num.slice(0,4);

    if(+firstLetter === 4 ){
        if(num.length === 13 || num.length === 16){
            return true ;
        }else{
            return false;
        }
    }else if(firstTwoLetter === '34' || firstTwoLetter === '37'){
        if(num.length === 15 ){
            return true;
        }else{
            return false;
        }    
    }else if(+firstTwoLetter >= 51 && +firstTwoLetter <= 55){
        if(num.length === 16){
            return true;
        }else{
            return false;
        }
    }else if(firstFourLetter === '6011' && num.length === 16){
        
        return true;

    }else if(+firstThreeLetter >= 300 && +firstThreeLetter <= 305){
        if(num.length === 14){
            return true;
        }else{
            return false;
        } 
    }else if(firstTwoLetter === '36' || firstTwoLetter === '38'){
        if(num.length === 14){
            return true;
        }else{
            return false;
        }
    }else {
        return false;
    }    
}

function checkNumbers(num){
    var nums ='0123456789';
    
    for(var i = 0; i < num.length; i++){
        if(!nums.includes(num[i]))
        {
            return false;
        }
     }
     return true;
}

