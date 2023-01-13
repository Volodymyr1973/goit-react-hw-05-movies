import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css'
// import css from './Layout.module.css';

const Layout = () => {
 
  return (
    <>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink className={css.link} to="/" end>
            Home
          </NavLink>
          <NavLink className={css.link} to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main className={css.main}>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />

        </Suspense>
       
      </main>
  
    </>
  );
};

export default Layout;