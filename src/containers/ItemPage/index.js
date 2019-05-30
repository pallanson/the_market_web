import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import Reviews from '../../components/Reviews';
import {Link} from "react-router-dom";
import Pepper from '../../img/bell_pepper.png';

const reviews = [
    {
        id: 1,
        title: "This thing sucks!",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore,\n" +
            "                    similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat\n" +
            "                    laborum. Sequi mollitia, necessitatibus quae sint natus.",
        rating: "1.5",
        userName: "Martin Huynh"
    },
    {
        id: 2,
        title: "I love this thing!",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore,\n" +
            "                    similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat\n" +
            "                    laborum. Sequi mollitia, necessitatibus quae sint natus.",
        rating: "5",
        userName: "Fernando Valarino"
    },
    {
        id: 3,
        title: "Meh",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore,\n" +
            "                    similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat\n" +
            "                    laborum. Sequi mollitia, necessitatibus quae sint natus.",
        rating: "2.5",
        userName: "Philip Allanson"
    },
];

// Import Reviews to Cards
function ReviewList(props) {
    const reviews = props.reviews;
    const listReviews = reviews.map((review) => (
            <div className="card-body">
                <h3>{review.title}</h3>
                <small className="text-muted">Posted by {review.userName} on 3/1/17</small>
                <p>{review.text}</p>
            </div>
        )
    );
    return (
        <ul>{listReviews}</ul>
    )
}

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
                    <Link to="/cart">
                        <button className="btn_add" onClick="">Add to Cart</button>
                    </Link>
                    <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9733; </span>
                    5.0 stars
                </div>
            </div>
            <Reviews/>
        </div>
    </div>
);