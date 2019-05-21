import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from '../../components/Header.js'
import Index from "../../components/Index";
import Footer from "../../components/Footer"
import HomePage from '../HomePage'
import CategoryPage from '../CategoryPage'
import CheckoutPage from '../CheckoutPage'
import CartPage from '../CartPage'
import LoginPage from '../LoginPage'
import RegisterPage from '../RegisterPage'
import PrivateRoute from '../PrivateRoute'
import NotFound from '../NotFound'

const App = () => (
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/category/:categoryName" component={CategoryPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <PrivateRoute path="/checkout" component={CheckoutPage} />
            <PrivateRoute path="/cart" component={CartPage} />
            <Route path="" component={NotFound} />
        </Switch>
        <Footer/>
    </div>
);

export default App;
