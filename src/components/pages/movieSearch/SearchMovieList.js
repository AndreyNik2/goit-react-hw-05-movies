import { urls } from 'components/config';
import { useLocation } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import { List, ListItem, Img, ImgLink } from './SearchMovieList.styled';

export const SearchMovieList = ({ isLoading, results }) => {
  const location = useLocation();
  return (
    <List>
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
        <ListItem key={id}>
          <ImgLink to={`${id}`} state={{ from: location }}>
            {poster_path && (
              <Img
                src={urls.BASE_IMAGE_URL + poster_path}
                alt={original_title}
              />
            )}
            <h2 color="#fff">{original_title}</h2>
          </ImgLink>
        </ListItem>
      ))}
    </List>
  );
};
