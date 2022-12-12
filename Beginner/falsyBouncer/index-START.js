/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer(array) {
    //return array.filter(e => e)
    let newArr = []
    for (const element of array){
        if (element){
            newArr.push(element)
        }
    }
    return newArr
}


module.exports = falsyBouncer