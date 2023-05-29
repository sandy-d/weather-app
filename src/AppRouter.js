import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import WeatherDetails from './WeatherDetails';
import NotFound from './NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather/:city" element={<WeatherDetails />} />
        <Route path="*" component={NotFound} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
