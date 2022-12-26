import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./pages/SharedLayout";
import { Home } from "./pages/home/Home";
import MovieId from "./pages/movieID/MovieId";
import Reviews from "./pages/movieID/Reviews";
import Cast from "./pages/movieID/Cast";
import MovieSearch from "./pages/movieSearch/SearchMovie";





export const App = () => {
  return (
    <div
      style={{
        padding: '20px 15px',
        color: '#efefef',
        backgroundColor: '#3f4251',
        minHeight: '100vh'
        
      }}
    >
      
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>}/>
          <Route path="/movies" element={<MovieSearch />} />
          <Route path="/movies/:movieId" element={<MovieId />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
