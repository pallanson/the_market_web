import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from '../../components/Header.js'
import Footer from "../../components/Footer"
import HomePage from '../HomePage'
import Login from "../Login"
import NotFound from '../NotFound'

const App = () => (
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route path="" component={NotFound} />
        </Switch>
        <Footer/>
    </div>
);

export default App;
