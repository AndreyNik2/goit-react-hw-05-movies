import { useEffect, useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchTrendingMovies } from 'components/ApiService';
import HomeMovieList from 'components/pages/home/HomeMovieList'


export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page,setPage] = useState(1)
  const isMounted = useRef(false);

  const incrementPage = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        const { results, total_results } = await fetchTrendingMovies();
        setTrendingMovies(results);
        setIsLoading(false);
        if (total_results === 0 || !total_results) {
          toast.error('Nothing found results trending movies :(');
        }
      } catch (error) {
        console.error(error);
        toast.error('Something went wrong :( Try reloading the page.');
      }
    }
    fetchData();
  }, [page]);

  

  return (
    <main>
      <Toaster position="top-right" />
      <HomeMovieList
        isLoading={isLoading}
        trendingMovies={trendingMovies}
        incrementPage={incrementPage}
      />
    </main>
  );
};
