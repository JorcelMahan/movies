const API_KEY = 'afff8ff8';
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;


export const searchMovies = async ({ search }) => {
    const data = await fetch(URL + search);
    const json = await data.json();
    if (json.Response === 'True') return json.Search.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster
    }))
};