const addNeighbors = (values) => {
    let addValues = []
    for (let i = 0 ; i < values.length ; i++) {

        if (i === values.length-1) {
            addValues.push(values[i] + (values[0]))
        } else {
            addValues.push(values[i] + (values[i+1]))
        }
    }

    return addValues
}

console.log(addNeighbors([1, 1, 1])) 