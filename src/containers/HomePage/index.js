import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import Categories from "../../components/Categories";
import Shop from "../../components/Shop";

export default () => (
    <div className="container">
        <Categories/>
        <Shop/>
    </div>
);