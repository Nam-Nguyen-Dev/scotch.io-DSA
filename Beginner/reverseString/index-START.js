/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    //return text.split("").reverse().join("")

    //Uses ES6 spread operator
    //return [...text].reverse().join("")

    //For loop
    /* let result = ""
    for (let i = text.length - 1; i >= 0; i--){
        result = result + text[i]
    }
    return result */

    //ES6 for...of
    /* let result = ""
    for (const chars of text){
        result = chars + result
    }
    return result */

    //The Recursive Way
    /* if (text === ''){
        return ''
    } else {
        return reverseString(text.substr(1)) + text[0]
    } */

    //Using reduce.()
    return text.split("").reduce((acc,c) => c + acc,"")
}


module.exports = reverseString