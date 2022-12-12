/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/
//take in string of text
//no funny biz
//findest longest word and return that word as a string


function longestWord(text) {
    /*     // iterate over the text
    let tempArr = text.split(" ").map(word => word.length)
    //find longest word
    let wordLen = Math.max(...tempArr)
    //return longest word
    
    for (const word of text.split(" ")){
        if(word.length === wordLen){
            return word
        }
    } */

    //using for loop
   /* let wordArr = text.split(" ")
   let wordLen = 0
   let result = ''

   for (let i = 0; i < wordArr.length; i++){
        if (wordArr[i].length > wordLen){
            wordLen = wordArr[i].length
            result = wordArr[i]
        }
   }
   return result */

   //Using reduce()
   /* return text.split(" ").reduce((acc, curr) => {
    if (curr.length > acc.length){
        return curr
    } else {
        return acc
    }
   }, '') */

   //Using sort()
   return text.split(" ").sort((a,b) => b.length - a.length).shift()
}

console.log(longestWord('a string of text'), 'string')
console.log(longestWord('a string of sreally long text'), 'sreally')
console.log(longestWord('a ab abc abcd'), 'abcd')


module.exports = longestWord