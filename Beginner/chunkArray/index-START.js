/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    /* let newArr = []
    for (let i = 0; i < array.length; i=i+size){
        newArr.push(array.slice(i,i+size))
    }
    return newArr */

    //Using for...of loop
    /* let result = []
    for (const value of array){
        let lastArray = result[result.length -1]
        if(!lastArray || lastArray.length === size){
            console.log(`lastArray: ${lastArray}`)
            console.log(`result: ${result}`)
            result.push([value])
            console.log(`lastArray: ${lastArray}`)
            console.log(`result: ${result}`)
        } else {
            console.log(`lastArray: ${lastArray}`)
            console.log(`result: ${result}`)
            lastArray.push(value)
            console.log(`lastArray: ${lastArray}`)
            console.log(`result: ${result}`)
        }
    }
    return result */

    //Using splice()
   /*  let result = []
    let arrayCopy = [...array]
    while(arrayCopy.length > 0){
        result.push(arrayCopy.splice(0,size))
    }
    return result */

    //Using recursion
    if (array.length <= size){
        return [array]
    }
    return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
}
console.log(chunkArray([1,2,3,4,5,6], 2))

module.exports = chunkArray