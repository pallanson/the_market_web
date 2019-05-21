import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from '../../components/Header.js'
import Index from "../../components/Index";
import Footer from "../../components/Footer"
import HomePage from '../HomePage'
import NotFound from '../NotFound'

const App = () => (
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="" component={NotFound} />
        </Switch>
        <Footer/>
    </div>
);

export default App;
