import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Carousel from "./Shop";
import Salt_Sale from "../img/salt_banner.png";

export default class BannerCarousel extends React.Component {
    render() {
        return (
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
        )
    }
}
