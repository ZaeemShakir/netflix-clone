const apikey = "7a2d81d4d6a6fc9e12720fc8d39c67b1";
const request = {
  fetchTrending: `/trending/all/week?api_key=${apikey}&language=en-US`,
  fetchNetflixOrignals: `/discover/tv?api_key=${apikey}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${apikey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${apikey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${apikey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${apikey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${apikey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${apikey}&with_genres=99`,
};
export default request;
