import { useLocation, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar';
import { fetchMoviesByName } from 'components/ApiService';
import { SearchMovieList } from './SearchMovieList';

const MovieSearch = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const isMounted = useRef(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const page = searchParams.get('page');
  console.log(location);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.target.elements.query.value, page: 1 });
    setResults([]);
    // event.target.reset();
  };

  const incrementPage = () => {
    setSearchParams({ query: query, page: Number(page) + 1 });
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    if (!query || query.length === 0) {
      return;
    }

    async function fetchData() {
      try {
        setIsLoading(true);
        const { results, total_pages } = await fetchMoviesByName(query, page);
        setResults(p => [...p, ...results]);
        setTotalPages(total_pages);
        setIsLoading(false);
        if (results === 0 || !results) {
          toast.error('Nothing found for your request :(');
        }
      } catch (error) {
        console.error(error);
        toast.error('Something went wrong :( Try reloading the page.');
      }
    }
    fetchData();
  }, [page, query]);

  return (
    <main>
      <Toaster position="top-right" />
      <button>Go back</button>
      <Searchbar handleSubmit={handleSubmit} />
      <SearchMovieList isLoading={isLoading} results={results} state={{from: location}} />
      {totalPages > 1 && <button onClick={incrementPage}>Load more</button>}
    </main>
  );
};

export default MovieSearch;
