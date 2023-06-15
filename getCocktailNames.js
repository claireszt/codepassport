const cocktails = [
    {name: 'Negroni', price: 8, ingredients: [
        {oz: 1.5, name: 'Gin'},
        {oz: 3/4, name: 'Campari'},
        {oz: 3/4, name: 'Sweet Vermouth'},
    ]},
    {name: 'Daiquiri', price: 9, ingredients: [
        {oz: 2, name: 'Cuban Rum'},
        {oz: 3/4, name: 'Lime juice'},
        {oz: 1/2, name: 'Simple syrup'},
    ]},
    {name: 'Margarita', price: 8, ingredients: [
        {oz: 2, name: 'Tequilla'},
        {oz: 1, name: 'Lime juice'},
        {oz: 1, name: 'Curaçao'},
    ]},
    {name: 'Moscow Mule', price: 7, ingredients: [
        {oz: 2, name: 'Vokda'},
        {oz: 3/4, name: 'Lime juice'},
        {oz: 4, name: 'Ginger Beer'},
    ]}
]

console.log(cocktails[0].name)

const getCocktailNames = (cocktails) => {
    let cocktailArray = []
    for (let i = 0 ; i < cocktails.length ; i++) {
        cocktailArray.push(cocktails[i].name)
    }
    return cocktailArray
}

console.log(getCocktailNames(cocktails))
