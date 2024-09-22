import { Link, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import css from "./NotFoundePage.module.css";

const NotFoundPage = () => {
  const [timer, setTimer] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds(timerSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timerSeconds]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimer(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={css.container}>
      {timer && <Navigate to="/" />}
      <h2 className={css.title}>Page not found!</h2>
      <Link className={css.link} to="/">
        Return to the website
      </Link>
      <p className={css.redirect}>
        You will be redirected to the home page in {timerSeconds}
      </p>
    </div>
  );
};

export default NotFoundPage;
