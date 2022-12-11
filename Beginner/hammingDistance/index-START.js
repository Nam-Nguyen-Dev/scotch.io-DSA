/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    let counter = 0
    for (let i = 0; i < stringA.length; i++){
        if (stringA[i] !== stringB[i]){
            counter++
        }
    }
    return counter 
}



module.exports = hammingDistance