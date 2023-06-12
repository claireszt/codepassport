const arrayToFrench = (array) => {
    let string = ''
   string += array[0]
    
    for (let i = 1 ; i < array.length ; i++) {

        if (i < array.length-1) {
            string += ', '+array[i]
        } 
        if (i === array.length-1) {
            string += ' et ' + array[i]
        }
    }
    
    return 'Mon tableau contient '+string+'.'
} 

console.log(arrayToFrench(['Claire']))
