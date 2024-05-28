
import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import GoToMenu from './pages/GoToMenu';
import FoodItems from './pages/FoodItems';
import OrderSummary from './pages/OrderSummary';
import ThankYou from './pages/ThankYou';

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/menu" component={isLoggedIn ? GoToMenu : Login} />
        <Route path="/food-items" component={isLoggedIn ? FoodItems : Login} />
        <Route path="/order-summary" component={isLoggedIn ? OrderSummary : Login} />
        <Route path="/thank-you" component={isLoggedIn ? ThankYou : Login} />
        <Navigate from="/" to="/login" />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
