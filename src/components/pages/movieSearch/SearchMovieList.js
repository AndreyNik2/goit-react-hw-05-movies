import { urls } from 'components/config';
import { Link, useLocation } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';

export const SearchMovieList = ({ isLoading, results }) => {
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      <Circles
        height="100"
        width="100"
        color="#641cf4"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={Boolean(isLoading)}
      />
      {results.map(({ original_title, id, poster_path }) => (
        <li key={id}>
          <Link to={`${id}`} state = {{from: location}}>
            {poster_path && (
              <img
                src={urls.BASE_IMAGE_URL + poster_path}
                alt={original_title}
              />
            )}
            <h2 color="#fff">{original_title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};
