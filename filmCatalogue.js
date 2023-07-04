const movies = [
    {
        id: 1,
        title: 'Les Évadés',
        rating: 8.1,
        categories: ['Drame']
    },
    {
        id: 2,
        title: 'The Dark Knight',
        rating: 8,
        categories: ['Action', 'Policier', 'Thriller']
    },
    {
        id: 3,
        title: 'La Cité de Dieu',
        rating: 8,
        categories: ['Gangster', 'Drame']
    },
    {
        id: 4,
        title: 'Pulp Fiction',
        rating: 8.3,
        categories: ['Gangster', 'Comédie']
    },
    {
        id: 5,
        title: 'Le Fabuleux Destin d\'Amélie Poulain (2001)',
        rating: 7.1,
        categories: ['Comédie romantique']
    },
];

const getMoviesIds = (movies, sortBy, categories) => {

    // Filter
    const byCategories = (movie) => {
        if (categories === undefined) {
            return true;
        }
        for (const category of categories) {
            if (movie.categories.includes(category)) {
                return true;
            }
        }
        return false;
    };

    // Sort
    const byRatingOrTitle = (a, b) => {
        if (sortBy === 'rating') {
            return b.rating - a.rating;
        }
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    };

    return movies.filter(byCategories).sort(byRatingOrTitle).map((movie) => movie.id);

};

console.log(getMoviesIds(movies, 'title', ['Gangster']))