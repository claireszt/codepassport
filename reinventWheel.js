
const myForEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
};

const myMap = (array, callback) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i));
    }
    return newArray;
};

const myFilter = (array, callback) => {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;

};

const myReduce = (array, callback, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
        result = callback(result, array[i], i);
    }
    return result;
};