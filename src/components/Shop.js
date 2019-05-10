import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import FilterLink from '../containers/FilterLink'
import {CategoryFilters} from '../actions'

const Shop = () => (
    <div className="col-lg-9 float-right shop">
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img className="d-block img-fluid" src="../img/lettuce.png" alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src="../img/salt_banner.png" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

        <div className="row">

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="item.html"><img className="card-img-top" src="../img/bell_pepper.png" alt=""/></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">Red Bell Pepper</a>
                        </h4>
                        <h5>39kr/kg</h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        <button className="btn_purchase" onClick="">Purchase</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="../img/pikachu.png" alt=""/></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">Pikachu Plush</a>
                        </h4>
                        <h5>250kr</h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        <button className="btn_purchase" onClick="">Purchase</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="../img/ice.png" alt=""/></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">Ice</a>
                        </h4>
                        <h5>100kr/g</h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        <button className="btn_purchase" onClick="">Purchase</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="../img/carrot.png" alt=""/></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">Item Four</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                            aspernatur!</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        <button className="btn_purchase" onClick="">Purchase</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="../img/cooler.png" alt=""/></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">Item Five</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                            aspernatur! Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        <button className="btn_purchase" onClick="">Purchase</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="../img/shirt.png" alt=""/></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">Item Six</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                            aspernatur!</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        <button className="btn_purchase" onClick="">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Shop;