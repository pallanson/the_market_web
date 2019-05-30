import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Carousel from 'react-bootstrap/Carousel';
import Item from './Item'
import Salt_Sale from '../img/salt_banner.png';

// Map Items to cards
export const ItemList = ({ items = [], itemClick, authed }) => (
    <div className="row">
        {items.map((item, key) =>
            <Item item={item} authed={authed} key={key} onClick={itemClick} />
        )}
    </div>
)

const Shop = ({
    items,
    pages,
    page,
    authed,
    noBanner = false,
    setPage = () => {},
    itemClick}) => {

    if (items.length === 0) {
        return (
            <div className="col-lg-9 float-right shop">
                <p>No Items ;(</p>
            </div>
        )
    }
    
    return (
        <div className="col-lg-9 float-right shop">
            { !noBanner && (
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
            )}

            <ItemList items={items} authed={authed} itemClick={itemClick}/>
            
            <div className="row col-12 justify-content-center">
                <nav>
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link" onClick={() => setPage(1)} aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </button>
                        </li>
                        {
                            [...Array(pages)].map((_, i) => 
                                <li key={i} className={`page-item ${page === (i + 1) ? 'active' : ''}`}>
                                    <button 
                                        className="page-link"
                                        onClick={() => setPage(i + 1)}
                                    >
                                        { i + 1 }
                                    </button>
                                </li>)
                        }
                        <li className="page-item">
                            <button className="page-link" onClick={() => setPage(pages)} aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Shop;