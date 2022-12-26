import { Outlet } from 'react-router-dom';
import { Link, Header } from './SharedLayout.syled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};
