const urls = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  CAST_PATH_URL: '/credits',
  GENRES_PATH_URL: 'genre/movie/list',
  TRENDINGS_PATH_URL: 'trending/movie/day',
  SEARCH_PATH_URL: 'search/movie',
  BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500',
  GET_MOVIE_DETAILS_PATH_URL: 'movie/',
  REVIEW_URL_PATH: '/reviews',
};

const API_KEY = '4e55e991eb56041fecba3fbc73e3250b';

const NOTIFY_UNCORRECT_SEARCH =
  'Search result is unsuccessful. Enter the correct movie name and try again!';

export { urls, API_KEY, NOTIFY_UNCORRECT_SEARCH };
