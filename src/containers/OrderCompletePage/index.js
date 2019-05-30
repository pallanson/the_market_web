import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import Actions from '../../actions'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { ratingStr } from '../../components/Item'
import { createStructuredSelector } from 'reselect'
import {Link} from "react-router-dom";
import { makeSelectOrder, makeSelectItems, makeSelectCurrentAddress, makeSelectCurrentPaymentMethod } from '../../selectors';

// Map Items to cards
const ItemList = ({ order }) => (
    <ul>
    <li>Your order:</li>
    {
        order.items.map(({ itemId, rating, name, price, imageUrl }, key) => {
            return (
            <div key={key} className="col-12 row">
                <div className="col-2 d-none d-sm-inline text-center">
                    <img className="img-responsive" src={imageUrl} alt="preview" width="120" height="80"></img>
                </div>
                <div className="col-6 text-sm-center">
                    <h4 className="product-name"><strong>{ name }</strong></h4>
                    <h4>
                        <small>{ ratingStr(rating) }</small>
                    </h4>
                </div>
                <div className="col-4 col-xs-6 text-sm-center row align-items-center">
                    <div className="col col-xs-12">
                        <h6><strong>${price}</strong></h6>
                    </div>
                </div>
            </div>
            )
        })
    }
    </ul>
)

const OrderCompletePage = ({ items, order, payment, address }) => {
    const { nameOnCard, cardNumber, expiryDate } = payment || {}
    const {
        name,
        addressLineOne,
        addressLineTwo,
        city,
        country,
        postcode
    } = address || {}

    return (
    <div class="container justify-content-center">
        <div className="col-lg-12">
            <div className="card">
                <div className="card-header">
                    <h3>Order Complete!</h3>
                </div>
                <div className="card-body">
                    <ItemList 
                        order={order}
                        items={items}
                    />
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <h6>Paid by</h6>
                            <small>{ nameOnCard } - {cardNumber.substring(cardNumber.length - 4, cardNumber.length)} - ({expiryDate})</small>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <h6>Shipped to</h6>
                            <small className="m-3">{name}: { addressLineOne }, {addressLineTwo}, {city} - {postcode}, {country}</small>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="float-right">
                        <div className="d-inline-flex align-items-center">
                            <p className="mr-5">Total price: ${order.total}</p>
                            <Link to="/"><button className="btn btn-success">Back to Home Page</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}

const mapStateToProps = createStructuredSelector({
    items: makeSelectItems(),
    address: makeSelectCurrentAddress(),
    payment: makeSelectCurrentPaymentMethod(),
    order: makeSelectOrder()
})

const mapDispatchToProps = (dispatch) => ({

})

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect)(OrderCompletePage);