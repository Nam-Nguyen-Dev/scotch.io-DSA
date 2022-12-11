/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    //return text.split("").reverse().join("") === text

    //Looping through and Comparing Characters
    //return text.split("").every((letter, index, arr) => letter === arr[arr.length - index - 1])

    //Optimizing the loop
    for (let i = 0; i < text.length/2; i++){
        if(text[i] !== text[text.length - i - 1]){
            return false
        }
    }
    return true
}



module.exports = palindromeChecker;