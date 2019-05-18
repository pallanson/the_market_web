import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Carousel from 'react-bootstrap/Carousel';
import Salt_Sale from '../img/salt_banner.png';
import Pepper from '../img/bell_pepper.png';
import Pikachu from '../img/pikachu.png';
import Ice from '../img/ice.png';
import Carrots from '../img/carrot.png';
import Cooler from '../img/cooler.png';
import Shirt from '../img/shirt.png';

const Shop = () => (
    <div className="col-lg-9 float-right shop">
        <Carousel className="my-4">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Salt_Sale}
                    alt="Salt Sale"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://placehold.it/900x350"
                    alt="Salt Sale"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://placehold.it/900x350"
                    alt="Salt Sale"
                />
            </Carousel.Item>
        </Carousel>

        <div className="row">

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="item.html"><img className="card-img-top" src={Pepper} alt=""/></a>
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
                    <a href="#"><img className="card-img-top" src={Pikachu} alt=""/></a>
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
                    <a href="#"><img className="card-img-top" src={Ice} alt=""/></a>
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
                    <a href="#"><img className="card-img-top" src={Carrots} alt=""/></a>
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
                    <a href="#"><img className="card-img-top" src={Cooler} alt=""/></a>
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
                    <a href="#"><img className="card-img-top" src={Shirt} alt=""/></a>
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