//  define a func that deeply compares two objects
// num, str, array, obj are the only data types
// check to see if they are deeply equal
// return true if they are, false if they are not

// returns true if both objs are the same type
const typeChecker = (obj1, obj2) => {
    if ( typeof obj1 !== typeof obj2 ) return false; // doesn't acount for arrays which are obj
    if (obj1 instanceof Array && obj2 instanceof Object) return false;
    if (obj1 instanceof Object && obj2 instanceof Array) return false;

    return true;
}

// returns true if both are objects or if both values are equal & not objects
const strAndNumEquivChecker = (obj1, obj2) => {
    if (typeof(obj1) === typeof(obj2) === object) return true;
    return (typeof(obj1) === string || typeof(obj1) === number) && ( obj1 !== obj2)
}

// checks both are same type and if not objects, if they are equivalent 
const typeAndEquivChecker = (obj1, obj2) => {
    return typeChecker(obj1, obj2) && strAndNumEquivChecker(obj1, obj2)
}

const obj_cheker = (obj1, obj2) => {
    if (! typeAndEquivChecker(obj1, obj2)) return false; // :D

    // only working with array array on first level
    if(obj1 instanceof Array) {
        if (obj1.length !== obj2.length) return false;
        // loop through array check if array check if obj
        for (let i = 0; i < obj1.length; i++) {
            if (!typeChecker(obj1[i], obj2[i])) return false;
            
        }

    }

}

console.log(typeof(0) === typeof(""))
console.log({a: "hi"} === {a: "hi"})
console.log([1, 2, 3] instanceof Array)


