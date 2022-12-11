/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    //Using character map and iterating over object
    
    /* let obj = {}
    for (const char of text){
        obj[char] = obj[char]+1 || 1
    }
    let maxChar = ''
    let count = 0
    for (const key in obj){
        if (obj[key] > count){
            maxChar = key
            count = obj[key]
        }
    }
    return maxChar */

    //Using charMap and arrays

    let obj = {}
    for (const char of text){
        obj[char] = obj[char]+1 || 1
    }

    let charArray = Object.keys(obj)
    let valuesArray = Object.values(obj)
    let maxCharValue = Math.max(...valuesArray)
    return charArray[valuesArray.indexOf(maxCharValue)]
}



module.exports = maxRecurringChar;