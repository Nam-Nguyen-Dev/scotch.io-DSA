/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });

    //return [...new Set([...jointArray])]

    //return Array.from(new Set([...jointArray]))

    //return jointArray.filter((e, i, a) => a.indexOf(e) === i)

    return jointArray.reduce((newArray, item) =>{
        return newArray.includes(item) ? newArray : [...newArray,item]
    }, [])
}


module.exports = mergeArrays