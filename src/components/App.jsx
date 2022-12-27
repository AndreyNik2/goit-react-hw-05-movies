import { Routes, Route } from "react-router-dom";
import { lazy } from "react";


const Home = lazy(() => import("./pages/home/Home"));
const SharedLayout = lazy(() => import("./pages/SharedLayout"));
const MovieId = lazy(() => import("./pages/movieID/MovieId"));
const Reviews = lazy(() => import("./pages/movieID/Reviews"));
const Cast = lazy(() => import("./pages/movieID/Cast"));
const MovieSearch = lazy(() => import("./pages/movieSearch/SearchMovie"));





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
          <Route path="/*" element={<h1>Page not found...</h1>}/>
        </Route>
      </Routes>
    </div>
  );
};
