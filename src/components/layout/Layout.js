import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import css from './Layout.module.css';

const Layout = () => {
  // const active = ({ isActive }) => {
  //   return isActive ? 'active' : '';
  // };

  return (
    <>
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />

        </Suspense>
       
      </main>
      <footer>React 2023</footer>
    </>
  );
};

export default Layout;