import { Home } from 'pages/Presentation-CH-New';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './index.module.css';
import Layoyt from './Layoyt/Layoyt';

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layoyt />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
