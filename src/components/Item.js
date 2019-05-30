import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Cooler from "../img/cooler.png";
import { Link } from "react-router-dom";

export const ratingStr = (rating = 0) => {
    let stars = 5
    let str = ''
    while(stars-- > 0) {
        if (rating-- > 0) {
            str += '★ '
        } else {
            str += '☆ '
        }
    }
    return str.trim()
} 

const Item = ({item, onClick = () => {}}) => {
    const {
        name,
        rating,
        itemId,
        price,
        description,
        imageUrl
    } = item
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
                <Link to={`item/${itemId}`}><img id="img" className="card-img-top" src={imageUrl ? imageUrl : Cooler} alt=""/></Link>
                <div className="card-body">
                    <h4 className="card-title">
                        <Link id="title" to={`/item/${itemId}`}>{ name }</Link>
                    </h4>
                    <h5 id="price">${price}</h5>
                    <p id="description" className="card-text">{ description }</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{ ratingStr(rating) }</small>
                    <button className="btn_purchase" onClick={() => onClick(item)}>Purchase</button>
                </div>
            </div>
        </div>
    )
}

export default Item