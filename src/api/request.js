const API_KEY = process.env.REACT_APP_API_KEY

export const endURL = {
  trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`,
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  top_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  search: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1`,
}
