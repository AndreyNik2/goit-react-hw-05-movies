import { useParams } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchReviuw } from 'components/ApiService';
import { List } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
    async function fetchData() {
      try {
        setIsLoading(true);
        const { results } = await fetchReviuw(movieId);
        setReviews(results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        toast.error('Something went wrong :( Try reloading the page.');
      }
    }
    fetchData();
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <div>
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
      <List>
        {reviews.map(({ author, content, id }) => (
          <li key={id}>
            <p>AUTHOR: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </List>
    </div>
  );
};

export default Reviews;
