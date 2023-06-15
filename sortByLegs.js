
const sortMethod = (a, b) => {
    return a.legs - b.legs
}

const sortByLegs = (arr) => {
    let arrSort = []
    for (i = 0 ; i < arr.length ; i++) {
        arrSort.push(arr[i])
    }
    arrSort = arrSort.sort(sortMethod)

    const newArr = []
    for (j = 0 ; j < arrSort.length ; j++) {
        newArr.push(arrSort[j].icon)
    }
    return newArr

}


console.log(sortByLegs([
    {icon: '🐱', legs: 4},
    {icon: '🐔', legs: 2},
    {icon: '🪱', legs: 0},
    {icon: '🐜', legs: 6},
    {icon: '🕷', legs: 8}
]))

// CORRECTION
// const sortByLegs = (animals) => {
//     return animals.sort((a, b) => a.legs - b.legs).map((animal) => animal.icon);
// };
