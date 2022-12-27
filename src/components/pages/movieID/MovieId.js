import { Circles } from 'react-loader-spinner';
import { Suspense, useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'components/ApiService';
import { urls } from 'components/config';
import { StyledLink, NLink } from './MovieId.styled';


const MovieId = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const isMounted = useRef(false);
  const goBack = location.state?.from ?? "/";

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetchMovieById(movieId);
        setMovieDetails(response);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        toast.error('Something went wrong :( Try reloading the page.');
      }
    }
    fetchData();
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }



  const {
    genres,
    original_title,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movieDetails;
  return (
    <main>
      <Circles
        height="100"
        width="100"
        color="#641cf4"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={Boolean(isLoading)}
      />
      <StyledLink to={goBack}>Go back</StyledLink>
      <div
        style={{
          width: '1200px',
          margin: '0 auto',
        }}
      >
        <div>
          <img src={urls.BASE_IMAGE_URL + poster_path} alt={original_title} />
        </div>
        <div>
          <h1>
            {original_title} ({release_date.slice(0, 4)})
          </h1>
          <p>User score: {Math.round((vote_average / 10) * 100)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
        <div>
          <h4>Aditional informational</h4>
          <NLink to="cast" state={{ from: location.state?.from && '/' }}>
            Cast
          </NLink>
          <NLink to="reviews" state={{ rom: location.state?.from && '/' }}>
            Reviews
          </NLink>
        </div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Toaster position="top-right" />
    </main>
  );
};

export default MovieId;
