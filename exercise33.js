/*
EXERCISE 33:

        Write a function called "isValidCard" that takes a parameter called "number" and returns whether it is a valid credit card number.

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
        
        Additionally, to further validate a credit card number, you'll have to follow an algorithm (called the Luhn Formula, FYI):
            1) From the back of the number, multiply every second number by two
            2) Convert the resulting product into a string (for each multipled number)
            2) Add each digit in the resulting strings to each other
            3) If the resulting sum is >= 10, repeat steps 2 & 3 on this particular number until it is < 10
            4) Add all the numbers together
            5) If the resulting sum divided by 10 yields no remainder (sum % 10 === 0), then it's valid! Otherwise, it's not.

        For example:

        '4499228308017422'
        [4,4,9,9,2,2,8,3,0,8,0,1,7,4,2,2] // turned into an array
        [8,4,18,9,4,2,16,3,0,8,0,1,14,4,4,2] // double every second number from the back
        [8,4,'18',9,4,2,'16',3,0,8,0,1,'14',4,4,2] // turn the numbers >= 10 into strings
        [8,4,9,9,4,2,7,3,0,8,0,1,5,4,4,2] // add each digit in the strings to each other
        -> 70 // add all numbers to each other
        70 % 10 = 0 // modding by 10 yields no remainder, so it's a valid credit card number
        isValidCard("4499228308017422") should return true

        '4579228308017422'
        [4,5,7,9,2,2,8,3,0,8,0,1,7,4,2,2] // turned into an array
        [8,5,14,9,4,2,16,3,0,8,0,1,14,4,4,2] // double every second number from the back
        [8,5,'14',9,4,2,'16',3,0,8,0,1,'14',4,4,2] // turn the numbers >= 10 into strings
        [8,5,5,9,4,2,7,3,0,8,0,1,5,4,4,2] // add each digit in the strings to each other
        -> 67 // add all numbers to each other
        67 % 10 === 7 // modding by 10 yields a remainder, so it's an invalid credit card number
        isValidCard("4579228308017422") should return false

        '9562857852271'
        [9,5,6,2,8,5,7,8,5,2,2,7,1] // turned into an array
        [9,10,6,4,8,10,7,16,5,4,2,14,1] // double every second number from the back
        [9,'10',6,4,8,'10',7,'16',5,4,2,'14',1] // turn the numbers >= 10 into strings
        [9,1,6,4,8,1,7,7,5,4,2,5,1] // add each digit in the strings to each other
        -> 60 // add all numbers together
        60 % 10 === 0 // modding by 10 yields no remainder, so it's a valid credit card number
        isValidCard("9562857852271") should return true       
*/

function isValidCard(number){
    return getCardType(number)&&validCardNum(number)&&checkNumbers(number);
}

function validCardNum(num){
    num = num.split('');   
    
    //make the elements as numbers
    for(var i = 0; i <num.length; i++){
        num[i] = +num[i];
    } 
    
    //double every second number from the back
    for(i = num.length - 2 ; i >= 0; i -= 2){
        num[i] = num[i] * 2;         
    }
    
    for( i = 0; i < num.length; i++){
        //turn the numbers >= 10 into strings
        while(num[i] > 10){
            var twoDigiSum = 0;
            var temp = num[i].toString();
            //add each digit in the strings to each other
            temp = temp.split('');
            // add all numbers together
            for(var y = 0; y < temp.length; y++){
                twoDigiSum  += +temp[y];
            }
            num[i] = twoDigiSum ;
        }
    }
    
    var sum = 0;
    for(i = 0; i< num.length; i++){
        sum += num[i];
    }
    
    return sum % 10 === 0;    
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


isValidCard('5180031369791559');