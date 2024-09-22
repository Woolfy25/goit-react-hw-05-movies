import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/Home/HomePage";
import MovieSearch from "../pages/MovieSearch/MovieSearch";
import MoviePage from "../pages/MoviePage/MoviePage";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<MovieSearch />} />
          <Route path="/movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
