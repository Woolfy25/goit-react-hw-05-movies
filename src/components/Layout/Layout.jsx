import React from "react";
import { Link } from "react-router-dom";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <div className={css.header}>
        <nav className={css.nav}>
          <Link className={css.link} to="/">
            Home
          </Link>
          <Link className={css.link} to="/search">
            Movies
          </Link>
        </nav>
      </div>
      <main className={css.main}>{children}</main>
    </div>
  );
};

export default Layout;
