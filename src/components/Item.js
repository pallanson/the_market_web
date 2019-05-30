import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Cooler from "../img/cooler.png";

const Item = () => (
    <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
            <a href="#"><img id="img" className="card-img-top" src={Cooler} alt=""/></a>
            <div className="card-body">
                <h4 className="card-title">
                    <a id="title" href="#">Item Five</a>
                </h4>
                <h5 id="price">$24.99</h5>
                <p id="description" className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                    aspernatur! Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                <button className="btn_purchase" onClick="">Purchase</button>
            </div>
        </div>
    </div>
);