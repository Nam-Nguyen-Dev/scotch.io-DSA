/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



function isAnagram(stringA, stringB) {
    // Code goes here

    /* if (stringA.length != stringB.length){
        return false
    }
    return stringA.split("").sort().join("") === stringB.split("").sort().join("") */

    //Using charMap

    function charMap(str) {
        let obj = {}
        for(const char of str){
            obj[char] = obj[char]+1 || 1
        }
        return obj
    }

    let stringAMap = charMap(stringA)
    let stringBMap = charMap(stringB)

    if (stringA.length === stringB.length){
        for(keys in stringAMap){
            if (stringAMap[keys] !== stringBMap[keys]){
                return false
            } 
        }
        return true
    } else {
        return flase
    }
}


module.exports = isAnagram