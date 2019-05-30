import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import Pepper from '../../img/bell_pepper.png';

export default () => (
    <div className="container mb-xl-5">
        <div className="col-lg-9 mr-auto ml-auto">
            <div className="card mt-4">
                <img className="card-img-top img-fluid" src={Pepper} alt=""/>
                <div className="card-body">
                    <h3 className="card-title">Red Bell Pepper</h3>
                    <h4>39kr/kg</h4>
                    <p className="card-text">Red bell peppers are medium to large in size, averaging 5-8 centimeters
                        in diameter and 5-12 centimeters in length, and are rounded, square, and blocky in shape
                        with 3-4 lobes and a thick green stem. The smooth skin is firm, glossy, and bright red, and
                        underneath the skin, the pale red flesh is thick, juicy, crisp, and succulent. There is also
                        a central, hollow cavity that contains very small, flat and bitter cream-colored seeds and a
                        thin, spongy white to pale red membrane. Red bell peppers have an aqueous crunch and are
                        sweet with a fruity flavor. </p>
                    <button className="btn_add" onClick="">Add to Cart</button>
                    <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                    5.0 stars
                </div>
            </div>
            <div className="card card-outline-secondary my-4">
                <div className="card-header">
                    Product Reviews
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore,
                        similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum.
                        Sequi mollitia, necessitatibus quae sint natus.</p>
                    <small className="text-muted">Posted by Anonymous on 3/1/17</small>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore,
                            similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat
                            laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                        <small className="text-muted">Posted by Anonymous on 3/1/17</small>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam
                                inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam
                                aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                            <small className="text-muted">Posted by Anonymous on 3/1/17</small>

                                <a href="#" className="btn btn-success">Leave a Review</a>
                </div>
            </div>
        </div>
    </div>
);