export let movies = [
    {
        id: 0,
        name: "The Good, The Bad, The Weird",
        score: 8.1
    },
    {
        id: 1,
        name: "Sympathy for Lady Vengeance",
        score: 7.5
    },
    {
        id: 2,
        name: "Oldboy",
        score: 9.04,
    },
    {
        id: 3,
        name: "Minari",
        score: 8.33,
    },
];
export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
  };

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movie = cleanedMovies;
        return true;
    }else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        // index starts in 0
        id: ((movies.length + 1) - 1),
        name,
        score,
    }
    movies.push(newMovie);
    return newMovie;
}