import { useParams } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchCast } from 'components/ApiService';
import { urls } from 'components/config';
import { List, ListItem, Img } from './Cast.styled';




const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
    async function fetchData() {
      try {
        setIsLoading(true);
        const { cast } = await fetchCast(movieId);
        setCast(cast);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        toast.error('Something went wrong :( Try reloading the page.');
      }
    }
    fetchData();
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <div>
      <List>
        {cast.map(item => (
          <ListItem key={item.id}>
            {item.profile_path && (
              <Img
                src={urls.BASE_IMAGE_URL + item.profile_path}
                alt={item.name}
              />
            )}
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </ListItem>
        ))}
      </List>
      <Circles
        height="100"
        width="100"
        color="#641cf4"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={Boolean(isLoading)}
      />
      <Toaster />
    </div>
  );
};

export default Cast;
