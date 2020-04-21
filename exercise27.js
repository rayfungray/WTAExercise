/*
EXERCISE 27:

        Write a function called "camelToKabob" that takes a parameter called "str" and returns that same string converted to kabob case.
        Camel case is when variables have multiple words and all but the first word begin with a capital letter (i.e.- aVariableName)
        Kabob case is when (usually in html or css) an important identifier (like a class or id) has multiple words all lower-case and separated by hyphens (i.e.- a-variable-name)
        
        For example:

        camelToKabob("aVariableName") should return 'a-variable-name'
        camelToKabob("bob") should return 'bob'
        camelToKabob("bobsUsedBookStore") should return 'bobs-used-book-store'
*/

function camelToKabob(str){
    for(var i = str.length -1 ; i >= 0 ; i--){
        if(str[i] === str[i].toUpperCase()){
           str = str.slice(0,i) + '-' + str.slice(i);
        }
    }
    str = str.toLowerCase();
    return str;
}
