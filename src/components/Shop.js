import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Carousel from 'react-bootstrap/Carousel';
import Item from './Item';
import Salt_Sale from '../img/salt_banner.png';
import Pepper from '../img/bell_pepper.png';
import Pikachu from '../img/pikachu.png';
import Ice from '../img/ice.png';
import Carrots from '../img/carrot.png';
import Cooler from '../img/cooler.png';
import Shirt from '../img/shirt.png';

// Map array
function ItemList(props) {
    const items = props.items;
    const listItems = items.map((item) => (
            <div className="col-lg-4 col-md-6 mb-4 float-left">
                <div className="card h-100">
                    <a href="#"><img id="img" className="card-img-top" src={Cooler} alt=""/></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a id="title" href="#">{item.title}</a>
                        </h4>
                        <h5 id="price">{item.price}</h5>
                        <p id="description" className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Amet numquam
                            aspernatur! Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        <button className="btn_purchase" onClick="">Purchase</button>
                    </div>
                </div>
            </div>
        )
    );
    return (
        <ul>{listItems}</ul>
    )
}

const items = [
    {id: 1, img: {Pepper}, title: "Red Bell Pepper", price: 59},
    {id: 2, img: {Pikachu}, title: "Pikachu Plush", price: 250},
    {id: 3, img: {Ice}, title: "Ice", price: 100},
    {id: 4, img: {Carrots}, title: "Carrots", price: 25},
    {id: 5, img: {Cooler}, title: "Cooler", price: 399},
    {id: 6, img: {Shirt}, title: "Shirt", price: 199},
    {id: 7, img: {Pepper}, title: "Purple Bell Pepper", price: 39},
    {id: 8, img: {Pepper}, title: "Yellow Bell Pepper", price: 39},
];
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
            <ItemList items={items}/>
        </div>
    </div>
);

export default Shop;