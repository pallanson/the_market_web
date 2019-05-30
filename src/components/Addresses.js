import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Item from './Item'

export const AddressList = ({ addresses = [], itemClick, authed }) => (
    <div className="row">
        {addresses.map((item, key) =>
            <Item item={item} authed={authed} key={key} onClick={itemClick} />
        )}
    </div>
)

const Addresses = ({
                  items,
                  pages,
                  page,
                  authed,
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

            <AddressList addresses={addresses} authed={authed} itemClick={itemClick}/>

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

export default Addresses;