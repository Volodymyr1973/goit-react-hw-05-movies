import { NavLink, Outlet } from 'react-router-dom';
// import css from './Layout.module.css';

export const Layout = () => {
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
        <Outlet />
      </main>
      <footer>React 2023</footer>
    </>
  );
};
