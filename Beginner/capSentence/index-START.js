/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
   // For loop
  /*  let newArr = []
   text.split(" ")
    .forEach(word => {
      newArr.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
    })
    
   
   return newArr.join(" ") */

    //map
   /*  return text.split(" ")
    .map(element => element[0].toUpperCase() + element.slice(1).toLowerCase())
    .join(" ") */

    //replace
    return text.toLowerCase().split(" ")
    .map(word => {
      return word.replace(word[0], word[0].toUpperCase())
    })
    .join(" ")
   
}

capSentence('cap this')

module.exports = capSentence