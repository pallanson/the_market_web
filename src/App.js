import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js';
import Index from "./components/Index";
import Footer from "./components/Footer"

const App = () => (
    <div>
        <Header />
        <Index/>
        <Footer/>
    </div>
);

export default App;
