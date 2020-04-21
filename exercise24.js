/*
EXERCISE 24:

        Write a function called "longestWord" that takes a parameter called "str" and returns the biggest word in "str" (a word is anything separated by a space that doesn't include commas or periods).
        Preference is given to earlier words in the case of a tie.
        You may assume that commas and periods only appear at the ends of words.
        
        For example:

        longestWord("A really long sentence.") should return 'sentence' -- NOT 'sentence.'
        longestWord("Two equally long words are in this sentence.") should return 'equally'
        longestWord("Hey") should return 'Hey'
*/

function longestWord(str){
    str = str.replace('.','');
    var words = str.split(' ');
    var longestWord = Number.NEGATIVE_INFINITY;
    var longestWordIndex = 0;
    for(var i = 0; i < words.length; i++){
        if(words[i].length > longestWord){
            longestWord = words[i].length;
            longestWordIndex = i;
        }
    }
    return words[longestWordIndex];
}

