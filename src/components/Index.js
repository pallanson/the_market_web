import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Categories from "./Categories";
import Shop from "./Shop.js";
import Footer from "./Footer";

const Index = () => (
    <div className="container">
        <Categories/>
        <Shop/>
        <Footer/>
    </div>
);

export default Index;