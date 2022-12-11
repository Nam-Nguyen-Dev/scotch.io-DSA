/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
   //Create hash map in case you need counter for non vowels
   /*  let obj = {}
   let count = 0
    for (const char of text.toLowerCase()){
        obj[char] = obj[char]+1 || 1
   }
   for (const keys in obj){
    if (keys == 'a' || keys == 'e' || keys == 'i' || keys == 'o' || keys == 'u'){
        count++
    }
   }
   return count */

   //Using for loop
   /* let counter = 0
   let vowels = ['a','e','i','o','u']
   for (chars of text.toLowerCase()){
    if(vowels.includes(chars)){
        counter++
    }
   }
   return counter */

   //Using recursion
   let counter = text.match(/['aeiou']/gi)

   return counter.length || 0
}



module.exports = vowelsCounter;
